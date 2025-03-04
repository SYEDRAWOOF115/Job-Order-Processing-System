import React from "react";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10 w-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Job Order Management</h2>
            <p className="text-gray-400 text-sm">Efficiently manage job orders with ease</p>
          </div>
  
          {/* Center Section - Navigation Links */}
          <nav className="my-4 md:my-0">
            <ul className="flex flex-wrap gap-6 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Orders</a></li>
              <li><a href="#" className="hover:text-white">Reports</a></li>
              <li><a href="#" className="hover:text-white">Settings</a></li>
            </ul>
          </nav>
  
          {/* Right Section - Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400">Contact: support@joborders.com</p>
            <p className="text-gray-400">© {new Date().getFullYear()} Job Order Management</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  