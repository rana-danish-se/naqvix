// src/utils/blogApi.js
// Try different URL formats if localhost doesn't work
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined'
    ? 'http://localhost:4000/api/blogs'
    : 'http://127.0.0.1:4000/api/blogs');

// Generic API error handler
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

// API utility functions
export const blogApi = {
  // Fetch blogs with filters
  async getBlogs(params = {}) {
    try {
      const searchParams = new URLSearchParams();

      // Add parameters only if they exist and are valid
      if (params.page && params.page > 0) {
        searchParams.append('page', params.page.toString());
      }

      if (params.limit && params.limit > 0) {
        searchParams.append('limit', params.limit.toString());
      }

      if (params.search && params.search.trim()) {
        searchParams.append('search', params.search.trim());
      }

      if (
        params.category &&
        params.category !== 'all' &&
        params.category !== 'All'
      ) {
        searchParams.append('category', params.category);
      }

      const url = `${API_BASE_URL}/get${
        searchParams.toString() ? `?${searchParams.toString()}` : ''
      }`;

      console.log('Making API request to:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },

        // Get single blog by ID
        async getBlogById(id) {
          try {
            if (!id) {
              throw new ApiError('Blog ID is required', 400);
            }

            const url = `${API_BASE_URL}/get/${id}`;
            console.log('Making API request to:', url);

            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              mode: 'cors',
              credentials: 'include',
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (!response.ok) {
              if (response.status === 404) {
                throw new ApiError('Blog not found', 404);
              }
              if (response.status === 400) {
                const errorData = await response.json();
                throw new ApiError(errorData.error || 'Invalid blog ID', 400);
              }

              const errorText = await response.text();
              console.error('Error response:', errorText);
              throw new ApiError(
                `Failed to fetch blog: ${response.statusText}`,
                response.status
              );
            }

            const data = await response.json();
            console.log('API response data:', data);

            // Validate response structure
            if (!data.blog) {
              throw new ApiError('Invalid response format from server', 500);
            }

            return data.blog;
          } catch (error) {
            console.error('API Error Details:', {
              name: error.name,
              message: error.message,
              stack: error.stack,
            });

            if (error instanceof ApiError) {
              throw error;
            }

            // Handle network errors
            if (error instanceof TypeError && error.message.includes('fetch')) {
              throw new ApiError(
                'Network error: Unable to connect to server. Make sure your Express server is running on http://localhost:4000',
                0
              );
            }

            throw new ApiError(
              'An unexpected error occurred while fetching the blog',
              500
            );
          }
        },
        mode: 'cors', // Explicitly set CORS mode
        credentials: 'include', // Include credentials if needed
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new ApiError(
          `Failed to fetch blogs: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      console.log('API response data:', data);

      // Validate response structure
      if (!data.blogs || !Array.isArray(data.blogs)) {
        throw new ApiError('Invalid response format from server', 500);
      }

      return {
        blogs: data.blogs,
        pagination: {
          page: data.page || 1,
          limit: data.limit || 10,
          totalBlogs: data.totalBlogs || 0,
          totalPages: data.totalPages || 1,
          hasNext: data.hasNext || false,
          hasPrev: data.hasPrev || false,
        },
      };
    } catch (error) {
      console.error('API Error Details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });

      if (error instanceof ApiError) {
        throw error;
      }

      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new ApiError(
          'Network error: Unable to connect to server. Make sure your Express server is running on http://localhost:4000',
          0
        );
      }

      throw new ApiError(
        'An unexpected error occurred while fetching blogs',
        500
      );
    }
  },

  async getBlogById(id) {
    try {
      if (!id) {
        throw new ApiError('Blog ID is required', 400);
      }

      const url = `${API_BASE_URL}/get/${id}`;
      console.log('Making API request to:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        if (response.status === 404) {
          throw new ApiError('Blog not found', 404);
        }
        if (response.status === 400) {
          const errorData = await response.json();
          throw new ApiError(errorData.error || 'Invalid blog ID', 400);
        }

        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new ApiError(
          `Failed to fetch blog: ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      console.log('API response data:', data);

      if (!data.blog) {
        throw new ApiError('Invalid response format from server', 500);
      }

      return data.blog;
    } catch (error) {
      console.error('API Error Details:', {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });

      if (error instanceof ApiError) {
        throw error;
      }

      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new ApiError(
          'Network error: Unable to connect to server. Make sure your Express server is running on http://localhost:4000',
          0
        );
      }

      throw new ApiError(
        'An unexpected error occurred while fetching the blog',
        500
      );
    }
  },
  // Create a new blog (for future use)
  async createBlog(formData) {
    try {
      const response = await fetch(`${API_BASE_URL}/create`, {
        method: 'POST',
        body: formData, // FormData for file uploads
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new ApiError(
          errorData.error || 'Failed to create blog',
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Failed to create blog', 500);
    }
  },
};

// Debounce utility for search optimization
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Transform blog data to match your component props
export const transformBlogData = (blog) => ({
  id: blog._id,
  title: blog.title,
  subtitle: blog.subtitle,
  description: blog.description,
  imageUrl: blog.images?.[0]?.url || '/api/placeholder/320/192',
  category: blog.category,
  createdAt: blog.createdAt,
});
