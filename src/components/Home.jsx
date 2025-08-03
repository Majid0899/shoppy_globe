import React from 'react'

import heroImage from '../images/heroImage.jpg';
import { Link } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import Spinner from './Spinner';
const Home = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  return (
    <>
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Discover the Latest Trends</h2>
            <p className="text-gray-600 mb-6">Shop quality products at unbeatable prices. Fast shipping & top-rated service.</p>
            <Link to="/products" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">Shop Now</Link>
          </div>
          <img src={heroImage} alt="Hero image" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* <!-- Product Grid --> */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold mb-10 text-center">Featured Products</h3>
          {loading ?
            <Spinner/> :
            (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* <!-- Product Card --> */}
              {data.slice(0, 6).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="border rounded-xl p-4 hover:shadow-lg transition" >
                <img src={product.thumbnail} alt="Product" className="rounded mb-4 w-full h-40 object-contain" />
                <h4 className="font-semibold text-lg mb-1">{product.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                
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
              </div>
                </Link>
                ))}

            </div>
            )}
        </div>
      </section>
    </>
  )
}

export default Home