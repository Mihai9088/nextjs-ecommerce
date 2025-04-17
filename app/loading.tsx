import React from "react";
import "./loading.css";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingPage;
