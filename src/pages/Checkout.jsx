import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {CartCard} from '../components';
import { Link } from 'react-router-dom';
import { clearItem } from '../redux/cartSlice';



const Checkout = () => {
    const cart_items=useSelector((state)=>state.cart.items);
    const dispatch=useDispatch()
    
    const handlePayment=()=>{
      dispatch(clearItem())
    
    }

  return (
    <>

    <div className="grid grid-cols-1 my-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart_items.map((item)=>(
            <CartCard key={item.id} product={item}/> 
        ))}
    </div>
   {cart_items.length > 0 ?
    <div className="flex justify-center items-center flex-col mt-6">
      <p className="text-lg font-extrabold text-green-600">Total Price: $
            {cart_items.reduce((acc,curr)=>acc+curr.price,0)}
          </p>
                <Link
                  to="/checkout"
                  className="px-6 my-2 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                onClick={handlePayment}
                >
                  Proceed to Payment
                  
                </Link>
            
    </div>:
    <div className="flex flex-col items-center justify-center  px-4 bg-gray-50 text-center">
      
      {/* Checkmark Image or Icon */}
      <svg
    className="w-20 h-20 text-green-500 mx-auto mb-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <path d="M9 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

      {/* Payment Message */}
      <h1 className="text-3xl font-bold text-green-600 mb-2">Payment Successful</h1>
      <p className="text-gray-700 mb-6">Thank you! Your payment has been processed successfully.</p>

      {/* Go Back / Continue Shopping */}
      <Link
        to="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
} 
    
    </>
  )
}

export default Checkout