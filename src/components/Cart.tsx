import { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "./FormatCurrency";
interface ProductType {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}
function Cart() {
  const shoppingCart = useShoppingCart();
  if (!shoppingCart) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  const { cartItems } = shoppingCart;
  const api_url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="cart">
      <div
        className="cartHeader d-flex justify-content-between align-items-end pb-1 mb-3"
        style={{ borderBottom: "2px solid black" }}
      >
        <h3 className="p-2">Cart</h3>
        <h5 className="mb-0 px-1 sub-t">
          {cartItems.length > 0 && (
            <>
              <span className="small">SubtTotal: </span>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </>
          )}
        </h5>
      </div>

      <div className="container d-flex flex-column">
        {cartItems.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <button
              className="btn btn-dark mb-2"
              style={{
                width: "100%",
                fontSize: "1rem",
              }}
            >
              CHECKOUT
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
