import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold">Movie Portal</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>Contact us: contact@movieportal.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/profile.php?id=100070584511436" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://x.com/Khadija2120" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/k.hhadija/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
