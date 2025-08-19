// src/components/ErrorDisplay.jsx
const ErrorDisplay = ({ error, onRetry }) => {
  const getErrorMessage = (error) => {
    if (error.status === 0) {
      return {
        title: "Connection Error",
        message: "Unable to connect to the server. Please check your internet connection.",
        suggestion: "Try refreshing the page or check if the server is running."
      };
    }
    
    if (error.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end.",
        suggestion: "Please try again in a moment."
      };
    }
    
    if (error.status === 404) {
      return {
        title: "Not Found",
        message: "The requested resource could not be found.",
        suggestion: "Please check the URL or try again later."
      };
    }
    
    return {
      title: "Something went wrong",
      message: error.message || "An unexpected error occurred.",
      suggestion: "Please try again."
    };
  };

  const errorInfo = getErrorMessage(error);

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Error Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Content */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {errorInfo.title}
        </h3>
        
        <p className="text-gray-600 mb-2">
          {errorInfo.message}
        </p>
        
        <p className="text-sm text-gray-500 mb-6">
          {errorInfo.suggestion}
        </p>

        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;