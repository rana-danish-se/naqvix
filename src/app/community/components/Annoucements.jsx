'use client';

import { communityApi } from '@/utils/communityApi';
import UHeading from '@/utils/UHeading';
import React, { useEffect, useState } from 'react';
import { CalendarIcon, ExternalLinkIcon, MegaphoneIcon } from 'lucide-react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await communityApi.getAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <AnnouncementsLoadingSkeleton />;
  }

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
          <MegaphoneIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
          Community Announcements
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay up to date with the latest news, updates, and important information from our community.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {announcements.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6">
            {announcements.map((item, index) => (
              <AnnouncementCard key={item._id} announcement={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const AnnouncementCard = ({ announcement, index }) => {
  const hasLink = announcement.link && announcement.link.trim() !== '';
  
  const CardContent = () => (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm shadow-sm hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-500 hover:-translate-y-1">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative p-8">
        {/* Header with badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              Announcement #{String(index + 1).padStart(2, '0')}
            </span>
          </div>
          {hasLink && (
            <div className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLinkIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {announcement.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed text-base">
          {announcement.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-4 h-4" />
            <time dateTime={announcement.createdAt}>
              {new Date(announcement.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          
          {hasLink && (
            <div className="flex items-center space-x-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
              <span>Read more</span>
              <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );

  return hasLink ? (
    <a
      href={announcement.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-2xl"
    >
      <CardContent />
    </a>
  ) : (
    <div className="cursor-default">
      <CardContent />
    </div>
  );
};

const EmptyState = () => (
  <div className="text-center py-16">
    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full mb-8">
      <MegaphoneIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      No announcements yet
    </h3>
    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
      Stay tuned! We'll post important updates and news here as they become available.
    </p>
  </div>
);

const AnnouncementsLoadingSkeleton = () => (
  <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
    {/* Header Skeleton */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6 animate-pulse" />
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-80 mx-auto mb-4 animate-pulse" />
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto animate-pulse" />
    </div>

    {/* Cards Skeleton */}
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-32 animate-pulse" />
            </div>
          </div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-4 animate-pulse" />
          <div className="space-y-2 mb-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse" />
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700/50">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Announcements;