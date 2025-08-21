'use client';

import { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategoryBar';
import BlogCard from './components/BlogCard';
import Navigation from './components/Navigation';
import BlogLoading from './components/BlogLanding';
import ErrorDisplay from '@/components/ErrorDisplay';
import { blogApi, transformBlogData } from '@/utils/blogApi';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalBlogs: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch blogs function
  const fetchBlogs = useCallback(
    async (params = {}) => {
      try {
        setLoading(true);
        setError(null);

        const response = await blogApi.getBlogs({
          page: params.page || pagination.page,
          limit: params.limit || pagination.limit,
          search: params.search || searchTerm,
          category: params.category || selectedCategory,
        });

        setBlogs(response.blogs.map(transformBlogData));
        setPagination(response.pagination);
      } catch (err) {
        setError(err);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    },
    [pagination.page, pagination.limit, searchTerm, selectedCategory]
  );

  // Initial load
  useEffect(() => {
    fetchBlogs({ page: 1 });
  }, []);

  // Handle search
  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      fetchBlogs({
        page: 1,
        search: term,
        category: selectedCategory,
      });
    },
    [selectedCategory, fetchBlogs]
  );

  // Handle category change
  const handleCategoryChange = useCallback(
    (category) => {
      setSelectedCategory(category);
      fetchBlogs({
        page: 1,
        search: searchTerm,
        category: category,
      });
    },
    [searchTerm, fetchBlogs]
  );

  // Handle pagination
  const handleNextPage = useCallback(() => {
    if (pagination.hasNext && !loading) {
      const nextPage = pagination.page + 1;
      fetchBlogs({ page: nextPage });
    }
  }, [pagination.hasNext, pagination.page, loading, fetchBlogs]);

  const handlePrevPage = useCallback(() => {
    if (pagination.hasPrev && !loading) {
      const prevPage = pagination.page - 1;
      fetchBlogs({ page: prevPage });
    }
  }, [pagination.hasPrev, pagination.page, loading, fetchBlogs]);

  // Retry function for error handling
  const handleRetry = useCallback(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <main className="flex flex-col items-center justify-center p-4 w-full gap-5 my-13">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1
          className="text-[6vw] w-[90%] text-center  md:text-[3.25vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
          A Journal of Design, Marketing, and the Creative Hustle That Shapes
          Tomorrow
        </h1>
        <p
          className="w-full text-center m-auto lg:m-0 md:w-2/3 text-base md:text-md
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500"
        >
          Welcome to our Naqvix's blog — a space where creativity meets
          strategy. Here, we share insights, trends, and lessons learned from
          the projects we take on and the industries we serve. Whether you're an
          entrepreneur, a growing brand, or simply curious about design,
          marketing, and technology, you'll find fresh perspectives, practical
          tips, and stories that inspire. Think of this as more than just a blog
          — it's your backstage pass to the ideas, strategies, and conversations
          shaping the future of business and creativity.
        </p>
      </div>

      {/* Search and Filter Section */}
      <SearchBar onSearch={handleSearch} isLoading={loading} />
      <CategorySelector
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        isLoading={loading}
      />

      {/* Results Info */}
      {!loading && !error && (
        <div className="text-sm text-gray-600 text-center">
          {pagination.totalBlogs > 0 ? (
            <>
              Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
              {Math.min(
                pagination.page * pagination.limit,
                pagination.totalBlogs
              )}{' '}
              of {pagination.totalBlogs} blogs
              {searchTerm && (
                <span className="ml-2 font-medium">for "{searchTerm}"</span>
              )}
              {selectedCategory !== 'All' && (
                <span className="ml-2 font-medium">in {selectedCategory}</span>
              )}
            </>
          ) : (
            <span>No blogs found</span>
          )}
        </div>
      )}

      {/* Content Section */}
      {error ? (
        <ErrorDisplay error={error} onRetry={handleRetry} />
      ) : loading ? (
        <BlogLoading count={pagination.limit} />
      ) : blogs.length > 0 ? (
        <>
          {/* Blog Cards */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                subtitle={blog.subtitle}
                id={blog.id}
                imageUrl={blog.imageUrl}
                description={blog.description}
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <Navigation
              hasNext={pagination.hasNext}
              hasPrev={pagination.hasPrev}
              onNext={handleNextPage}
              onPrev={handlePrevPage}
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              isLoading={loading}
            />
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No blogs found
            </h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filter criteria.'
                : 'There are no blogs available at the moment.'}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
