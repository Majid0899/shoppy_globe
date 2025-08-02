import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = () => {

  const [IsMenu, setIsMenu] = useState(false)
  const items = useSelector((state) => state.cart.items);

  const quantity=items.reduce((acc,curr)=>acc+curr.quantity,0)

  return (
    <>
      <header className="bg-gray-100 mt-0 shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/*  Logo */}
            <div className="flex-shrink-0  text-2xl font-bold text-blue-600">
              <Link to="/" className='flex'>
                <img src="/public/icon.png" alt="ShoppyGlobe" className="h-8 w-auto" />
                <span className='pl-2'>ShoppyGlobe</span>
              </Link>
            </div>

            {/*  Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 gap-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>

            </nav>

            {/*  Cart and Mobile Menu Button  */}
            <div className="flex items-center space-x-4">
              {/*  Cart */}
              <div className="relative cursor-pointer group">
                <Link to="/cartitems">
                  <button className="relative text-gray-700 hover:text-blue-600">
                    {/*  Cart Icon  */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                      viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                    </svg>
                    {/* No of Items */}
                    <span
                      className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {items.length>0 ? quantity : "0"}
                    </span>
                  </button>
                </Link>
              </div>

              {/*  Mobile menu button  */}

              {IsMenu ? (
                <button className="md:hidden text-gray-700 hover:text-blue-600 transition duration-500 ease-in"
                  onClick={() => setIsMenu(!IsMenu)}>
                  {/* Cross icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              ) : (
                <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none transition duration-500 ease-in"
                  onClick={() => setIsMenu(!IsMenu)}>
                  {/* Menu icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              )}

            </div>
          </div>
        </div>

        {/* Mobile Menu  */}

        {IsMenu && <div className="md:hidden px-4 pt-2 pb-4 space-y-2">

          <Link to="/" className="block  text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/products" className=" block text-gray-700 hover:text-blue-600 font-medium">Products</Link>

        </div>}

      </header>
    </>
  )
}

export default Header