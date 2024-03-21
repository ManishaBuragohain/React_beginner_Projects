import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchproducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        // setProducts((prevData) => [...prevData, ...dataResponse.products]);
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log("data-----------", result);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return <div>loading...........</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          load more products
        </button>
        {disableBtn ? <p>you have reached to 100 product</p> : null}
      </div>
    </div>
  );
}
