import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(api) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        const products = response.data.products.map((product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          discountPercentage: product.discountPercentage,
          rating: product.rating,
          stock: product.stock,
          category: product.category,
          brand: product.brand,
          thumbnail: product.thumbnail,
          images: product.images,
          quantity:0
        }));
        setData(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
