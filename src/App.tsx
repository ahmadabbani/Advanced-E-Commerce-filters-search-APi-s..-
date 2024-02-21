import Navbar from "./components/Navbar";
import { useState, ChangeEvent, MouseEvent } from "react";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartContext";
function App() {
  const [query, setQuery] = useState("");
  //filter states
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedRate, setSelectedRate] = useState<string | null>(null);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  //filter by price
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(event.target.value);
  };

  // filter by rate
  const handleRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRate(event.target.value);
  };
  // reset  when switching
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;

    if (buttonId === "ratebtn") {
      setSelectedPrice(event.currentTarget.value);
    } else if (buttonId === "pricebtn") {
      setSelectedRate(event.currentTarget.value);
    }
  };

  return (
    <BrowserRouter basename="/Advanced-E-Commerce-filters-search-APi-s..-">
      {" "}
      {/* Adjust the basename value */}
      <ShoppingCartProvider>
        <Navbar query={query} handleInputChange={handleInputChange} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="main"
            element={
              <>
                <ProductsList
                  selectedRate={selectedRate}
                  setSelectedRate={setSelectedRate}
                  handleRateChange={handleRateChange}
                  handleChange={handleChange}
                  handleClick={handleClick}
                  query={query}
                  setQuery={setQuery}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                />
              </>
            }
          />

          <Route path="about" element={<About />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
