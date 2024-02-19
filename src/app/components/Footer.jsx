import React from "react";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <footer className="footer fixed-bottom py-2 mt-5 bg-info">
      <div className="container text-center">
        <span className="text-black">
          Today is {currentDate}, {currentTime}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
