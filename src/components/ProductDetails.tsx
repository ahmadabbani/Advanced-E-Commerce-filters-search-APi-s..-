import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Product from "./Product";
import "./ProductDetails.css";
interface ProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  // Add other properties of your product here...
}

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState<ProductType>({
    id: 0,
    image: "",
    title: "",
    price: 0,
    description: "",
    rating: {
      rate: 0,
      count: 0,
    },
    // Initialize other properties of your product here...
  });
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((Product) => setProduct(Product));
  }, []);
  const location = useLocation();
  const showDescription = location.state?.showDescription;
  return (
    <>
      <div className="container w-50 bigsize">
        <h1 className="mb-4">Prouct Details:</h1>
        <Product
          product={product}
          showButton={false}
          showDescription={showDescription}
        />
      </div>
    </>
  );
}

export default ProductDetails;
