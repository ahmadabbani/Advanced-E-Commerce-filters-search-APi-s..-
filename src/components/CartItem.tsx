import { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "./FormatCurrency";
import "./Navbar.css";

interface ProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}
interface CartItemProps {
  id: number;
  quantity: number;
}

function CartItem({ id, quantity }: CartItemProps) {
  const api_url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const item = products.find((i) => i.id === id);
  if (item == null) return null;
  const shoppingCart = useShoppingCart();
  if (!shoppingCart) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  const { decreaseCartQuantity, increaseCartQuantity, removeItemFromCart } =
    shoppingCart;
  const totalPricePerItem = quantity * item.price;

  return (
    <div className="cartItems d-flex flex-column">
      <div className="cardDetails d-flex flex-column">
        <div className="d-flex gap-2">
          <img
            src={item.image}
            alt="cart-img"
            style={{ height: "75px", objectFit: "cover" }}
          />
          <h6 style={{ fontFamily: "revert-layer" }}>{item.title}</h6>
        </div>

        <span style={{ fontWeight: "bold" }} className="text-muted small">
          {formatCurrency(item.price)}
        </span>
        {quantity > 0 && (
          <span style={{ fontWeight: "bold" }} className="small">
            x{quantity}
          </span>
        )}
      </div>
      <div className="setQuantity d-flex flex-column mb-md-2 mb-1  align-items-center">
        <div className="d-flex gap-2 align-items-center  ">
          <button
            style={{
              fontSize: "1.7rem",
              height: "35px",
              width: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              color: "white",
            }}
            className="btn "
            onClick={() => {
              quantity > 0
                ? decreaseCartQuantity(item.id)
                : removeItemFromCart(item.id);
            }}
          >
            -
          </button>
          <span style={{ fontWeight: "bold" }}>{quantity}</span>
          <button
            style={{
              fontSize: "1.7rem",
              height: "35px",
              width: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              color: "white",
            }}
            className="btn "
            onClick={() => increaseCartQuantity(item.id)}
          >
            +
          </button>
        </div>
        <div className="text-center">
          {totalPricePerItem > 0 ? (
            <span style={{ fontWeight: "bold" }} className="small">
              Total: {formatCurrency(totalPricePerItem)}
            </span>
          ) : null}
        </div>
      </div>

      <button
        className="btn btn-danger m-auto"
        style={{
          borderRadius: "100%",
          width: "35px",
          height: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.8rem",
        }}
        onClick={() => removeItemFromCart(item.id)}
      >
        X
      </button>
      <div className="container">
        <hr />
      </div>
    </div>
  );
}

export default CartItem;
