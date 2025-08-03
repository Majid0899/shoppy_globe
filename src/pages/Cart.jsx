import React from 'react'
import { useSelector } from 'react-redux'
import {CartItem} from '../components'
import {Link} from 'react-router-dom'

const Cart = () => {
  const products=useSelector((state)=>state.cart.items)
  
  return (
    <>

    <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:mt-3 font-bold mb-6 text-center text-gray-800">
         Cart Items
        </h1>
    </div>
    {products.length>0 ?
    (<>
      { /*Cart items */ }
    <div className="grid grid-cols-1 my-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
            <CartItem key={item.id} product={item}/>
          ))}
      </div>
       {/* Proceed to Checkout Button */}
          <div className="flex justify-center mt-6">
            <Link
              to="/checkout"
              className="px-6 py-3 my-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
          </>
      )
      :(
       <div className='flex  flex-col justify-center items-center'>
      <p className='px-2 py-2 text-2xl'>No items in cart</p>
      <Link to="/products" className="inline-block px-6 py-3 my-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">Shop Now</Link>
    </div>)}  
    
          
    </>
  )
}

export default Cart