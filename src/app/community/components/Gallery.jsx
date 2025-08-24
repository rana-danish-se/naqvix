'use client';
import { communityApi } from '@/utils/communityApi';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const Gallery = () => {
  const [galleries, setgalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await communityApi.getgallries();
        setgalleries(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextGallery = () => {
    setCurrentIndex((prev) => (prev + 1) % galleries.length);
  };

  const prevGallery = () => {
    setCurrentIndex((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 dark:border-purple-400"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Loading galleries...
          </p>
        </div>
      </div>
    );
  }

  if (!galleries.length) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">
            📷
          </div>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            No Galleries Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Check back later for new photo galleries.
          </p>
        </div>
      </div>
    );
  }

  const currentGallery = galleries[currentIndex];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-[90%] mx-auto shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Community Gallery
              </h1>
            </div>

            {/* Gallery Navigation */}
            {galleries.length > 1 && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevGallery}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  disabled={galleries.length <= 1}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                <span className="text-sm text-gray-500 dark:text-gray-400 px-2">
                  {currentIndex + 1} / {galleries.length}
                </span>
                <button
                  onClick={nextGallery}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  disabled={galleries.length <= 1}
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Gallery Info */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                  {currentGallery.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1 capitalize">
                  {currentGallery.description}
                </p>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(currentGallery.createdAt)}
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="p-8 relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-blue-600/20 blur-3xl"></div>

            {currentGallery.images.length === 1 && (
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                  <img
                    src={currentGallery.images[0].url}
                    alt={`${currentGallery.title} - Image 1`}
                    className="relative w-full h-96 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            )}

            {currentGallery.images.length === 2 && (
              <div className="relative z-10 grid grid-cols-2 gap-6">
                {currentGallery.images.map((image, index) => (
                  <div
                    key={image._id}
                    className="relative group overflow-hidden h-120 rounded-2xl shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={image.url}
                      alt={`${currentGallery.title} - Image ${index + 1}`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            )}

            {currentGallery.images.length === 3 && (
              <div className="relative z-10">
                <div className="grid grid-rows-2 gap-6 h-[500px]">
                  {/* Top full-width image */}
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[0].url}
                      alt={`${currentGallery.title} - Image 1`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom two images side by side */}
                  <div className="grid grid-cols-2 gap-6">
                    {currentGallery.images.slice(1).map((image, index) => (
                      <div
                        key={image._id}
                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                        <img
                          src={image.url}
                          alt={`${currentGallery.title} - Image ${index + 2}`}
                          className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentGallery.images.length === 4 && (
              <div className="relative z-10">
                <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[500px]">
                  {/* Main large image on the left */}
                  <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[0].url}
                      alt={`${currentGallery.title} - Image 1`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Top right image */}
                  <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[1].url}
                      alt={`${currentGallery.title} - Image 2`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom right two images stacked */}
                  <div className="col-span-2 row-span-1 grid grid-rows-2 gap-6">
                    {currentGallery.images.slice(2).map((image, index) => (
                      <div
                        key={image._id}
                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                        <img
                          src={image.url}
                          alt={`${currentGallery.title} - Image ${index + 3}`}
                          className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentGallery.images.length === 5 && (
              <div className="relative z-10">
                <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[500px]">
                  {/* Main large image */}
                  <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[0].url}
                      alt={`${currentGallery.title} - Image 1`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Top right small image */}
                  <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[1].url}
                      alt={`${currentGallery.title} - Image 2`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom right two small images */}
                  <div className="col-span-1 row-span-1 grid grid-rows-2 gap-6">
                    {currentGallery.images.slice(2, 4).map((image, index) => (
                      <div
                        key={image._id}
                        className="relative group overflow-hidden rounded-2xl shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                        <img
                          src={image.url}
                          alt={`${currentGallery.title} - Image ${index + 3}`}
                          className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Fifth image bottom right */}
                  <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
                    <img
                      src={currentGallery.images[4].url}
                      alt={`${currentGallery.title} - Image 5`}
                      className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Indicators */}
        {galleries.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {galleries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 dark:bg-purple-400 shadow-lg shadow-purple-500/50'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
