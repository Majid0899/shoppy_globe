import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-gray-700 md:mt-4">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Logo and Description */}
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2"><Link to="/">ShoppyGlobe</Link></div>
              <p className="text-sm">Your global destination for seamless online shopping.</p>
            </div>

            {/*  Navigation Links */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium">Home</Link>
                <Link to="/products" className="block text-gray-700 hover:text-blue-600 font-medium">Products</Link>

              </ul>
            </div>

            {/*  Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {/*  Facebook  */}
                <a href="#" className="hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22 12a10 10 0 10-11.63 9.88v-7H8v-3h2.37V9.5c0-2.34 1.4-3.63 3.52-3.63 1.02 0 2.1.18 2.1.18v2.3h-1.18c-1.17 0-1.54.73-1.54 1.48V12H17l-.38 3h-2.35v7A10 10 0 0022 12z" />
                  </svg>
                </a>
                {/*  Twitter  */}
                <a href="#" className="hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.53A8.3 8.3 0 0022 4.3a8.1 8.1 0 01-2.36.65A4.1 4.1 0 0021.4 3a8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 3.8a4.1 4.1 0 001.27 5.5A4 4 0 012.8 8v.05a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.85.07A4.1 4.1 0 007.8 15a8.2 8.2 0 01-5 1.7A8.6 8.6 0 012 16.6a11.5 11.5 0 006 1.76" />
                  </svg>
                </a>
                {/*  Instagram */}
                <a href="#" className="hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom  */}
          <div className="mt-10 border-t pt-4 text-sm text-gray-500 text-center">
            &copy; 2025 ShoppyGlobe. All rights reserved.
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer