import React from 'react'

const CartCard = ({product}) => {
  return (
    <>
    <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover rounded-xl mb-4"
      />

      {/* Product Title */}
      <h2 className="text-lg font-bold text-blue-800 mb-1 line-clamp-1">
        {product.title}
      </h2>

      {/* Brand */}
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {product.brand}
      </p>

      {/* category */}
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {product.category}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {product.description}
      </p>

      {/* Price and Rating */}
      <div className="flex items-center justify-between mt-auto mb-3">
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-green-600">
            ${product.price}
          </span>
          {product.discountPercentage && (
            <span className="text-xs text-red-500 line-through">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        <span className="text-sm bg-yellow-100 text-yellow-600 font-medium px-2 py-0.5 rounded-lg">
          ⭐ {product.rating}
        </span>
      </div>
         <p className="text-sm self-center text-gray-600  line-clamp-2">
        {product.quantity} 
      </p>
      </div>
    </>
  )
}

export default CartCard