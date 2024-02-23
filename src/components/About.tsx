import aboutimg from "../images/about.png";
import "./about.css";
function About() {
  return (
    <div className="container" style={{ paddingTop: "8rem" }}>
      <div className="row">
        <h1
          className="mb-5"
          style={{
            backgroundImage: "linear-gradient(45deg, #bb2323, #000000)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Why Choosing Us
        </h1>
        <div className="col-lg-7">
          <h5 className="mb-5" style={{ fontSize: "16px" }}>
            <i className="ri-truck-line mx-2"></i>
            <span>
              <span style={{ fontWeight: "bold" }}>fast delivery:</span>
              <span className="text-muted">
                {" "}
                Benefit from the quickest delivery service in the city.
              </span>
            </span>
          </h5>
          <h5 className="mb-5" style={{ fontSize: "16px" }}>
            <i className="ri-shapes-line mx-2"></i>
            <span>
              <span style={{ fontWeight: "bold" }}>Diverse Selection:</span>
              <span className="text-muted">
                {" "}
                Explore a wide range of products across various categories.
              </span>
            </span>
          </h5>
          <h5 className="mb-5" style={{ fontSize: "16px" }}>
            <i className="ri-money-dollar-circle-line mx-2"></i>
            <span>
              <span style={{ fontWeight: "bold" }}>Competitive Pricing:</span>
              <span className="text-muted">
                {" "}
                Find the best prices in the area.
              </span>
            </span>
          </h5>
          <h5 className="mb-5" style={{ fontSize: "16px" }}>
            <i className="ri-vip-diamond-line mx-2"></i>
            <span>
              <span style={{ fontWeight: "bold" }}>Stylish Choices:</span>
              <span className="text-muted">
                {" "}
                Discover the latest trends and fashionable options.
              </span>
            </span>
          </h5>
          <h5 className="mb-5" style={{ fontSize: "16px" }}>
            <i className="ri-service-line mx-2"></i>
            <span>
              <span style={{ fontWeight: "bold" }}>Customer Support:</span>
              <span className="text-muted">
                {" "}
                Our dedicated team is ready to assist you.
              </span>
            </span>
          </h5>
        </div>
        <div className="col-lg-5">
          <img src={aboutimg} style={{ width: "100%" }} />
        </div>
      </div>
      <hr
        style={{
          height: "8px",
          width: "50%",
          margin: "auto",
          border: "none",
          backgroundImage: "linear-gradient(to right,  #000000,  #ff0000)",
        }}
      />
    </div>
  );
}

export default About;
