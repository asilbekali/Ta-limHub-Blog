import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
  
          
          {/* Copyright and policies */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ta'limHub-Blog. All Rights Reserved. Protected by intellectual property laws.
            </p>
            <div className="flex justify-center gap-4 mt-3 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300">Terms of Use</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300">Disclaimer</a>
              <span>•</span>
              <span>Created: 28.12.2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;