import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Features Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">FEATURES</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Site Builder</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Shopping Cart</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Marketing Tools</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Themes</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Careers</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Customers</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Press</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Giving Back</a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Guides</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Business Tools</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">How to Sell Online</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Start an Online Store</a>
            </li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">GET HELP</h3>
          <ul>
            <li className="mb-2">
              <a href="tel:18006463517" className="hover:text-gray-400 text-sm">1-800-646-3517</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Help Center</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400 text-sm">Become a Partner</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">Made with <span className="text-red-500">❤</span> in India by ShopStreet</p>
        <p className="text-gray-500 text-sm">© 2024 ShopStreet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
