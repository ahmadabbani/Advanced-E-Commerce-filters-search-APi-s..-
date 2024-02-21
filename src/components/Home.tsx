import "./home.css";
import { Link } from "react-router-dom";
import cl1 from "../images/cl1.jpg";
import j2 from "../images/j2.jpg";
import tech from "../images/tech.jpg";

function Home() {
  return (
    <div className="container pt-5" style={{ minHeight: "70vh" }}>
      <div className="row">
        <div
          className="col-12 mb-5 "
          style={{
            borderRight: "8px solid red",
            paddingTop: "8rem",
          }}
        >
          <div className="content-left w-100">
            <h1
              className="text-center"
              style={{
                backgroundImage: "linear-gradient(45deg, #000000, #ff0000)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "sans-serif",
              }}
            >
              Discover Your Style at Style Central Marketplace
            </h1>
            <p
              className="w-50 mb-4 mx-auto  text-center text-muted"
              style={{
                fontFamily: "cursive",
                lineHeight: "1.7rem",
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              ducimus nisi animi molestiae cumque. Natus, quos. Saepe, dolor!
              Culpa, tempore.
            </p>
            <Link className="hero-btn  d-block  mx-auto" to="/main">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div
          className="col-12 d-flex justify-content-center gap-3"
          style={{
            borderLeft: "8px solid black",
          }}
        >
          <img
            src={j2}
            className="w-25"
            style={{
              transform: "translateY(20px)",
            }}
          />
          <img src={cl1} className="w-25" />
          <img
            src={tech}
            className="w-25 "
            style={{ transform: "translateY(-20px)" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
