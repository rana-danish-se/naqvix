'use client';

const BlogCard = ({ title, subtitle, imageUrl, description, id }) => {
  // Truncate description to show only first 120 characters
  const truncateText = (text, maxLength = 120) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-80 h-96 bg-white dark:bg-neutral-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={imageUrl || '/api/placeholder/320/192'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 h-48 flex flex-col justify-between">
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-lg font-bold text-zinc-400 mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm font-medium text-zinc-900 mb-2 ">
              {subtitle}
            </p>
          )}
        </div>

        {/* Read More Link */}
        <div className="mt-auto">
          <a
            href={`/blogs/${id}`}
            className="inline-flex items-center dark:text-white/90 text-blue-600 hover:text-purple-600 font-medium text-sm group-hover:gap-2 gap-1 transition-all duration-200"
          >
            Read More
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
