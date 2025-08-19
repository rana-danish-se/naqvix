'use client';
import React, { useState, useCallback } from 'react';
import { debounce } from '@/utils/blogApi';
const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 500),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="relative flex items-center justify-center gap-3 max-w-md">

      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-40 border border-white h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-navy-600 rounded-full blur-xl opacity-30"></div>

      {/* Search input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search blogs..."
          disabled={isLoading}
          className={`
            relative z-10 flex-1 w-full sm:w-[500px] px-4 py-3 dark:text-white border border-gray-200 rounded-lg 
            focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 
            transition-all duration-200
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        />

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
          </div>
        )}
      </div>

      {/* Search button */}
      <button
        onClick={handleSearchClick}
        disabled={isLoading}
        className={`
          relative cursor-pointer z-10 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-navy-700 
          text-white font-medium rounded-lg transition-opacity duration-200
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
        `}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;
