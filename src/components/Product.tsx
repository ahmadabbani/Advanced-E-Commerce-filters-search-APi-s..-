import "./Product.css";
import "./Cart";
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

import formatCurrency from "./FormatCurrency";

interface ProductProps {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  showButton: boolean;
  showDescription?: boolean;
}
function Product(props: ProductProps) {
  const { product, showButton } = props;
  const shoppingCart = useShoppingCart();
  if (!shoppingCart) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  const { getItemsQuantity, increaseCartQuantity, removeItemFromCart } =
    shoppingCart;
  const quantity = getItemsQuantity(product.id);
  const [, setShowDescription] = useState(false);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // hide after 2 seconds
  };

  return (
    <>
      <div className="card w-100 h-100">
        <div className="card-body">
          <div className="body-content ">
            <img
              src={product.image}
              className="mb-2 mx-auto "
              alt="..."
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
              }}
            />
            <h5
              className="card-title mb-md-2 smallsize"
              style={{ fontFamily: "revert-layer" }}
            >
              {product.title}
            </h5>
            <span className=" rate small fw-bold">
              Rate: {product.rating.rate}{" "}
            </span>
            {props.showDescription && (
              <p className="card-text" style={{ fontFamily: "revert-layer" }}>
                {product.description}
              </p>
            )}
            <span
              style={{ fontWeight: "bold" }}
              className=" price text-muted d-block mb-2"
            >
              {formatCurrency(product.price)}
            </span>
          </div>
          <div className="buttons d-flex flex-column mx-auto">
            {showButton && (
              <button
                className="mb-2"
                style={{
                  padding: "5px 8px",
                  backgroundColor: "transparent",
                  color: "blue",
                  border: "2px solid blue",
                  fontWeight: "bold",
                  boxShadow: "2px 2px 2px blue",
                }}
                onClick={() => {
                  setShowDescription(true);
                  navigate(`/product/${product.id}`, {
                    state: { showDescription: true },
                  });
                }}
              >
                Details
              </button>
            )}
            {quantity === 0 ? (
              <button
                style={{
                  padding: "5px 8px",
                  backgroundColor: "transparent",
                  color: "green",
                  border: "2px solid green",
                  fontWeight: "bold",
                  boxShadow: "2px 2px 2px green",
                }}
                onClick={() => {
                  increaseCartQuantity(product.id);
                  handleClick();
                }}
              >
                Add to cart
              </button>
            ) : (
              <div className="d-flex align-items-center flex-column">
                {showNotification && (
                  <div
                    className={classNames("notification", {
                      hide: !showNotification,
                    })}
                  >
                    Item added!
                  </div>
                )}
                <button
                  style={{
                    padding: "5px 8px",
                    backgroundColor: "transparent",
                    color: "red",
                    border: "2px solid red",
                    fontWeight: "bold",
                    boxShadow: "2px 2px 2px red",
                  }}
                  onClick={() => removeItemFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
