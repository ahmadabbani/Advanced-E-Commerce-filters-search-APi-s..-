import "./ProductsList.css";
interface CategoryTitleProps {
  cat: string;
}

function CategoryTitle(props: CategoryTitleProps) {
  const { cat } = props;
  return (
    <div className="categTitle mb-md-4 mb-2">
      <h1
        style={{
          fontFamily: "cursive",
          position: "relative",
          marginLeft: "100px",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "-100px",
            top: "50%",
            width: "70px",
            height: "4px",
            backgroundColor: "#e63535",
            display: "block",
            transform: "translateY(200%)",
          }}
        ></span>
        {cat}
      </h1>
    </div>
  );
}

export default CategoryTitle;
