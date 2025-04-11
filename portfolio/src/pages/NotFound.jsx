
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-lg px-6">
        <h1 className="text-6xl md:text-9xl font-bold gradient-text">404</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto"></div>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Oops! This page doesn't exist in this dimension.
        </p>
        <p className="text-gray-400">
          The page you're looking for might have been moved, deleted, or perhaps never existed.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 mt-4"
        >
          <ArrowLeft className="h-4 w-4" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
