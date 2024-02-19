import React from "react";

const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
