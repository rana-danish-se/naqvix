const API_BASE_URL =
  process.env.NEXT_PUBLIC_COMMUNITY_API_URL ||
  (typeof window !== 'undefined'
    ? 'http://localhost:4000/api/community'
    : 'http://127.0.0.1:4000/api/community');

// Generic API error handler
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

export const communityApi = {
  async getAnnouncements() {
    try {
      const response = await fetch(`${API_BASE_URL}/annoucement `);
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching announcements:', error);
      return [];
    }
  },
    async getVideos() {
    try {
      const response = await fetch(`${API_BASE_URL}/video `);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  },
    async getgallries() {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery `);
      if (!response.ok) {
        throw new Error('Failed to fetch gallery');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching gallery:', error);
      return [];
    }
  }
};
