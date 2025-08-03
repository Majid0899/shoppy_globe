import React, { useEffect, useState } from 'react'

import useFetch from '../utils/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import {Spinner,ProductItem} from '../components';
import { setSearchText,clearSearchText } from '../redux/searchSlice';

const ProductList = () => {

  
  const SearchText=useSelector((state)=>state.search.query)
  const [filterItems, setfilterItems] = useState([]);
  const [Error, setError] = useState(null);
  const [finalProduct, setfinalProduct] = useState([])
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  
  const dispatch = useDispatch()
  const handleAddProduct = (id) => {
    const product = data.find((item) => item.id === id)
    dispatch(addItem(product))
  }

  const handleBack = () => {
    setError(null)
    setfilterItems([])
    dispatch(clearSearchText())
  }
  const handleSearch = () => {

    if (SearchText.trim() === "") {
      setError("Please Enter a Product  Name !!!")
    }
    else {
      const searchProduct = data.filter((item) => { return item.title.toLowerCase().includes(SearchText.toLowerCase()) })

      if (searchProduct.length > 0) {
        setfilterItems(searchProduct);
        setError(null)
        dispatch(clearSearchText())
      } else {
        setfilterItems([])
        setError(`No product found with the name of ${SearchText}`)
      }
    }
  }

  useEffect(() => {
    if (filterItems.length > 0) {
      setfinalProduct(filterItems)
    } else {
      setfinalProduct(data)
    }

  }, [data,filterItems])



  return (
    <>
    
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Our Products
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-2 mb-6">
          <input
            type="text"
            value={SearchText}
            placeholder="Search Products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => dispatch(setSearchText(e.target.value))}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {error && <p className="flex justify-center items-center text-red-500 text-sm mt-4">{error}</p>}
      {loading ? <Spinner />
        : Error ? (<div className="flex flex-col mt-2 justify-center items-center">
          <div className="bg-blue-100 text-red-500 px-4 py-2 rounded-full">{Error}</div>
          <button
            className="my-4 self-center px-4 py-2 bg-blue-500 text-center text-white rounded-lg shadow hover:bg-blue-600 transition" onClick={handleBack}>
            <Link to="/products">Go Back</Link>
          </button>

        </div>) :
          (<div className="grid grid-cols-1 my-2 mx-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {finalProduct.map((item) => (
             
                <ProductItem key={item.id} product={item} addProduct={handleAddProduct} />
            ))}
          </div>
          )

      }
    </>
  )
}

export default ProductList
