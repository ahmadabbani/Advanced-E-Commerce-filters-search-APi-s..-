import logo from "../images/logo.jfif";
import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import Cart from "./Cart";
import "./Navbar.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
interface NavbarProps {
  query: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
function Navbar(props: NavbarProps) {
  const { query, handleInputChange } = props;
  const shoppingCart = useShoppingCart();
  if (!shoppingCart) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  const { cartItems } = shoppingCart;

  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg mb-3"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="container nav-container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "90px" }}
              className="rounded rounded-circle"
            />
          </Link>

          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search for products."
          />

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/main">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <span
            className="material-symbols-outlined border border-2 border-white rounded-circle p-2"
            style={{ cursor: "pointer" }}
            onClick={toggleCart}
          >
            shopping_cart
            {cartItems.length > 0 ? (
              <div className="cartNotification">
                {cartItems.reduce((total, cartItem) => {
                  return total + cartItem.quantity;
                }, 0)}
              </div>
            ) : null}
          </span>
          <button
            style={{
              backgroundColor: "transparent",
              fontSize: "1.5rem",
            }}
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-4-line"}></i>
          </button>

          {showCart && <Cart />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
