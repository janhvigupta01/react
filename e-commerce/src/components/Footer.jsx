import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-white font-bold text-lg mb-4">About Us</h2>
          <p className="text-sm leading-6">
            We provide high quality products at affordable prices. 
            Our mission is to bring the best shopping experience to you.
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
          <p className="text-sm">Email: support@example.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 cursor-pointer">🌐</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 cursor-pointer">🐦</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 cursor-pointer">📘</span>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
