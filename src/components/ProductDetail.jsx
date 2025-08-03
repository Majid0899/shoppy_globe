import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import Spinner from './Spinner';

const ProductDetail = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  /*extract the id from url*/
  const { id } = useParams()
  /*Find the product on the basis of id */
  const product = data.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch()

  /* Handle Add Prouct to item cart */
  const handleAddProduct = (id) => {
    const product = data.find((item) => item.id === id)
    dispatch(addItem(product))
  }
 

  return (

    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Products
        </h1>
      </div>

      {loading ? (
       <Spinner />) : (
        <div className="bg-gradient-to-br my-2 border-2 md:mt-4 md:space-y-5 mx-4 shadow-blue-500 border-blue-500 rounded shadow-md  transition duration-300 p-4 flex flex-col ">
          {/* Product Image */}
          <img
            src={product.images[0]}
            alt={product.title}
            className=" h-48  w-full  object-contain rounded-xl mb-4"
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

          {/* Stock */}
          <p className="text-sm text-gray-600  line-clamp-2">
            {product.stock} items left in stock
          </p>


          {/* Price and Rating */}
          <div className="flex items-center justify-between  mb-3">
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

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddProduct(product.id)}
            className="mt-2 bg-blue-600 self-center hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition-colors"
          >
            Add to Cart
          </button>
        </div>

      )}



    </>

  )
}

export default ProductDetail