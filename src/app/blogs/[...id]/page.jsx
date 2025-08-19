'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BlogImageGallery from '../components/BlogImageGallery';
import MarkdownRenderer from '@/utils/MarkdownRenderer';
import SingleBlogLoading from '../components/SingleBlogLanding';
import ErrorDisplay from '@/components/ErrorDisplay';
import { blogApi } from '@/utils/blogApi';

const IndividualBlogPage = () => {
  const params = useParams();
  const router = useRouter();
  const blogId = params.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) {
        setError(new Error('Blog ID not found'));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const blogData = await blogApi.getBlogById(blogId);
        setBlog(blogData);
      } catch (err) {
        setError(err);
        console.error('Error fetching blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Handle retry
  const handleRetry = () => {
    window.location.reload();
  };

  // Loading state
  if (loading) {
    return <SingleBlogLoading />;
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ErrorDisplay error={error} onRetry={handleRetry} />
      </div>
    );
  }

 
  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/blogs')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push('/blogs')}
        className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors group"
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blogs
      </button>

      {/* Blog Header */}
      <header className="mb-8">
        {/* Category Badge */}
        {blog.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
              {blog.category}
            </span>
          </div>
        )}

        {/* Title */}
         <h1
          className="text-[7vw] text-center lg:text-left md:text-[4.25vw] font-extrabold leading-tight 
            bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 
            bg-clip-text text-transparent
            dark:bg-gradient-to-r dark:from-white dark:via-zinc-200 dark:to-zinc-400"
        >
         {blog.title}
        </h1>

        {/* Subtitle */}
        {blog.subtitle && (
          <h2 className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed mb-6">
            {blog.subtitle}
          </h2>
        )}

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Published {formatDate(blog.createdAt)}</span>
          </div>
          
          {blog.images && blog.images.length > 0 && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{blog.images.length} image{blog.images.length !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
      </header>

      {/* Image Gallery */}
      {blog.images && blog.images.length > 0 && (
        <section className="mb-12">
          <BlogImageGallery images={blog.images} title={blog.title} />
        </section>
      )}

      {/* Blog Content */}
      <section className="mb-12 dark:text-white/50">
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={blog.description} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-500">
            <p>Article published on {formatDate(blog.createdAt)}</p>
            {blog.category && (
              <p>Filed under: <span className="font-medium text-gray-700">{blog.category}</span></p>
            )}
          </div>
          
          <button
            onClick={() => router.push('/blogs')}
            className="self-start sm:self-auto px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            ← More Articles
          </button>
        </div>
      </footer>
    </article>
  );
};

export default IndividualBlogPage;