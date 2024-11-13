import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {/* First Category */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Category</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Reference</a></li>
              </ul>
            </div>

            {/* Second Category */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Web</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">eCommerce</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Business</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Entertainment</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Portfolio</a></li>
              </ul>
            </div>

            {/* Third Category */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Media</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Brochure</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Nonprofit</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Education</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Project</a></li>
              </ul>
            </div>

            {/* Fourth Category */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Business</p>
              <ul className="mt-2 space-y-2">
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Info</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Personal</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Wiki</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Forum</a></li>
                <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Portfolio</a></li>
              </ul>
            </div>
          </div>

          {/* Application Updates Section */}
          <div className="md:max-w-md lg:col-span-2">
            <p className="font-medium tracking-wide text-gray-300">Application Updates</p>
            <form className="mt-4 flex flex-col md:flex-row">
              <input type="email" name="email" id="email" placeholder="Your email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-100 rounded shadow-sm md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none" />
              <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 hover:bg-orange-600 focus:outline-none">Subscribe</button>
            </form>
            <p className="mt-4 text-sm text-gray-500">Stay updated with the latest news and insights.</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500 text-center">© 2024 | All rights reserved</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500"><FaTwitter className="h-6 w-6" /></a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500"><FaInstagram className="h-6 w-6" /></a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500"><FaFacebook className="h-6 w-6" /></a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500"><FaLinkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
