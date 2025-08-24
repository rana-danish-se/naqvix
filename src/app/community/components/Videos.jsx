'use client';

import { communityApi } from '@/utils/communityApi';
import React, { useEffect, useState } from 'react';
import { PlayIcon, ExternalLinkIcon, CalendarIcon, VideoIcon, ClockIcon } from 'lucide-react';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await communityApi.getVideos();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <VideosLoadingSkeleton />;
  }

  return (
    <section className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
          <VideoIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
          Community Videos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover our latest content, tutorials, and community highlights from our YouTube channel.
        </p>
      </div>

      {/* Content */}
      {videos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video._id} video={video} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

const VideoCard = ({ video, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };
  return (
    <div className="group">
      <a
        href={video.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-2xl dark:shadow-gray-900/20 transition-all duration-500 hover:-translate-y-2 group">
          {/* Thumbnail Container */}
          <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-800">
            {/* Thumbnail Image */}
            {video.thumbnailUrl ? (
              <>
                {/* Loading State */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center  animate-pulse">
                    <VideoIcon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
             
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 
                  }`}
                  onLoad={() => {
                    console.log("image loaded")
                    setImageLoaded(true);
                    setImageError(false);
                  }}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                    console.log('Failed to load thumbnail:', video.thumbnailUrl);
                  }}
                />
              </>
            ) : null}

            {/* Final Fallback - No Thumbnail Available */}
            {(!video.thumbnailUrl || imageError) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20">
                <VideoIcon className="w-16 h-16 text-red-400 dark:text-red-500 mb-2" />
                <span className="text-sm text-red-500 dark:text-red-400 font-medium">
                  Video Thumbnail
                </span>
              </div>
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="transform scale-0 group-hover:scale-100 transition-all duration-300 ease-out">
                <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-2xl">
                  <PlayIcon className="w-7 h-7 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>

            {/* Video Badge */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white shadow-lg">
                Video #{String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Duration Badge (if available) */}
            <div className="absolute bottom-4 right-4 opacity-90">
              <span className="inline-flex items-center px-2 py-1 rounded bg-black bg-opacity-75 text-white text-xs font-medium">
                <ClockIcon className="w-3 h-3 mr-1" />
                Video
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
              {video.title}
            </h3>

            {/* Description */}
            {video.description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {video.description}
              </p>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
              {/* Date */}
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <CalendarIcon className="w-4 h-4" />
                <span>{formatDate(video.createdAt)}</span>
              </div>

              {/* Watch Link */}
              <div className="flex items-center space-x-2 text-sm text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
                <span className="hidden sm:inline">Watch</span>
                <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                  <ExternalLinkIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500" />
        </div>
      </a>
    </div>
  );
};

const EmptyState = () => (
  <div className="text-center py-16">
    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full mb-8">
      <VideoIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      No videos yet
    </h3>
    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
      We're working on creating amazing content for you. Check back soon for our latest videos!
    </p>
    <div className="mt-8">
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 font-medium"
      >
        <VideoIcon className="w-5 h-5 mr-2" />
        Visit our Channel
      </a>
    </div>
  </div>
);

const VideosLoadingSkeleton = () => (
  <section className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
    {/* Header Skeleton */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6 animate-pulse" />
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-80 mx-auto mb-4 animate-pulse" />
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto animate-pulse" />
    </div>

    {/* Grid Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 overflow-hidden">
          {/* Thumbnail Skeleton */}
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 animate-pulse" />
          
          {/* Content Skeleton */}
          <div className="p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3 animate-pulse" />
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Videos;