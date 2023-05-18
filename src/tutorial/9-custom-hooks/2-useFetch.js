import { useState, useEffect, useCallback } from "react";
// useCallback hook is added after its tutorial
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [url, fetchProducts]);
  return { loading, products };
};
