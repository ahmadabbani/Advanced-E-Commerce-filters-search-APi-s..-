import { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import Product from "./Product";
import Sidebar from "./Sidebar/Sidebar";
import CategoryTitle from "./CategoryTitle";
import "./ProductsList.css";
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
}
interface QueryProps {
  query: string;
  setQuery: (query: string) => void;
}
interface FilterProps {
  selectedPrice: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedRate: string | null;
  setSelectedRate: React.Dispatch<React.SetStateAction<string | null>>;
  handleRateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

type Props = QueryProps & FilterProps;
function ProductsList(props: Props) {
  const {
    query,
    setQuery,
    selectedPrice,
    handleChange,
    selectedRate,
    handleRateChange,
    handleClick,
  } = props;
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useState("Show All");

  const getAllProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setQuery("");
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getProductsByCategorie = (catName: string) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setQuery("");
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(
    products: ProductType[],
    query: string,
    selected: string | null,
    selectedrate: string | null
  ) {
    // Filtering Input Items
    if (query) {
      products = filteredItems;
    }
    // Applying selected filter for price
    if (selected) {
      if (selected === "0to50") {
        products = products.filter(
          (product) => product.price >= 0 && product.price <= 50
        );
      } else if (selected === "50to100") {
        products = products.filter(
          (product) => product.price >= 50 && product.price <= 100
        );
      } else if (selected === "100to150") {
        products = products.filter(
          (product) => product.price >= 100 && product.price <= 150
        );
      } else if (selected === "150to200") {
        products = products.filter(
          (product) => product.price >= 150 && product.price <= 200
        );
      } else if (selected === "above200") {
        products = products.filter((product) => product.price >= 200);
      }
    }
    // Applying selected filter for rate
    if (selectedrate) {
      if (selectedrate === "0to1") {
        products = products.filter(
          (product) => product.rating.rate >= 0 && product.rating.rate <= 1
        );
      } else if (selectedrate === "1to2") {
        products = products.filter(
          (product) => product.rating.rate >= 1 && product.rating.rate <= 2
        );
      } else if (selectedrate === "2to3") {
        products = products.filter(
          (product) => product.rating.rate >= 2 && product.rating.rate <= 3
        );
      } else if (selectedrate === "3to4") {
        products = products.filter(
          (product) => product.rating.rate >= 3 && product.rating.rate <= 4
        );
      } else if (selectedrate === "4to5") {
        products = products.filter((product) => product.rating.rate >= 4);
      }
    }

    return products;
  }
  const result = filteredData(products, query, selectedPrice, selectedRate);
  return (
    <>
      <h1
        className="text-center mb-5"
        style={{
          backgroundImage: "linear-gradient(45deg, #ff0000, #000000)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          paddingTop: "11rem",
        }}
      >
        Our products
      </h1>
      <div className="container main-container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-3 col-4">
            <Sidebar
              handleClick={handleClick}
              handleChange={handleChange}
              handleRateChange={handleRateChange}
            />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-9 col-8">
            <div className=" container d-flex justify-content-center mb-2 gap-3 cat-btns ">
              <button
                style={{
                  color: selectedButton === "Show All" ? "white" : "black",
                  backgroundColor:
                    selectedButton === "Show All" ? "black" : "transparent",
                  boxShadow:
                    selectedButton === "Show All"
                      ? "2px 2px 2px rgb(161, 161, 161)"
                      : "2px 2px 2px black",
                }}
                className=" mb-3  mx-md-2"
                onClick={() => {
                  getAllProducts();
                  setSelectedCategory(null);
                  setSelectedButton("Show All");
                }}
              >
                Show All
              </button>
              {categories.map((cat) => {
                return (
                  <button
                    style={{
                      color: selectedButton === cat ? "white" : "black",
                      backgroundColor:
                        selectedButton === cat ? "black" : "transparent",
                      boxShadow:
                        selectedButton === cat
                          ? "2px 2px 2px rgb(161, 161, 161)"
                          : "2px 2px 2px black",
                    }}
                    key={cat}
                    className=" mb-3  mx-md-2"
                    onClick={() => {
                      getProductsByCategorie(cat);
                      setSelectedCategory(cat);
                      setSelectedButton(cat);
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {selectedCategory && <CategoryTitle cat={selectedCategory} />}
            <div className="grid">
              {result.map((product) => (
                <div className="product" key={product.id}>
                  <Product product={product} showButton={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsList;
