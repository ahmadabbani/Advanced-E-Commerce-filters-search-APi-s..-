import Input from "./Input";
import "./filter.css";
import { useState, ChangeEvent, MouseEvent } from "react";
interface PriceProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  istrue: boolean;
  setistrue: React.Dispatch<React.SetStateAction<boolean>>;
  handleRateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Filter = (props: PriceProps) => {
  const { handleChange, istrue, setistrue, handleRateChange, handleClick } =
    props;
  const [isChecked, setIsChecked] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("Price");
  return (
    <>
      <div className="ml">
        <h5 className="text-muted" style={{ marginBottom: "1.4rem" }}>
          Filter by:
        </h5>
        <div className="filter-btns d-flex gap-3 mb-4">
          <button
            style={{
              color: selectedFilter === "Price" ? "white" : "black",
              backgroundColor:
                selectedFilter === "Price" ? "black" : "transparent",
            }}
            id="pricebtn"
            value=""
            onClick={(event) => {
              if (!istrue) {
                setistrue(true);
              }
              if (!isChecked) {
                setIsChecked(true);
                handleClick(event);
              }

              setSelectedFilter("Price");
            }}
          >
            Price
          </button>
          <button
            style={{
              color: selectedFilter === "Rate" ? "white" : "black",
              backgroundColor:
                selectedFilter === "Rate" ? "black" : "transparent",
            }}
            id="ratebtn"
            value=""
            onClick={(event) => {
              if (istrue) {
                setistrue(false);
              }
              if (!isChecked) {
                setIsChecked(true);
                handleClick(event);
              }

              setSelectedFilter("Rate");
            }}
          >
            Rate
          </button>
        </div>
        <div className="d-flex align-items-center  mb-4">
          <label
            className="sidebar-label-container"
            htmlFor="all"
            style={{
              width: "85px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bolder",
            }}
          >
            <span>All</span>
          </label>
          <input
            onClick={() => {
              if (!isChecked) {
                setIsChecked(true);
              }
            }}
            onChange={(event) => {
              handleChange(event);
              handleRateChange(event);
            }}
            checked={isChecked}
            type="radio"
            value=""
            name="test2"
            id="all"
            style={{ width: "15px" }}
          />
        </div>
        <Input
          isChecked={isChecked}
          setischecked={setIsChecked}
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          value={istrue ? "0to50" : "0to1"}
          title={istrue ? "$0 - 50" : "rate 0 to 1"}
          name="test2"
          istrue={istrue}
        />
        <Input
          isChecked={isChecked}
          setischecked={setIsChecked}
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          value={istrue ? "50to100" : "1to2"}
          title={istrue ? "$50 - 100" : "rate 1 to 2"}
          name="test2"
          istrue={istrue}
        />
        <Input
          isChecked={isChecked}
          setischecked={setIsChecked}
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          value={istrue ? "100to150" : "2to3"}
          title={istrue ? "$100 - 150" : "rate 2 to 3"}
          name="test2"
          istrue={istrue}
        />
        <Input
          isChecked={isChecked}
          setischecked={setIsChecked}
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          value={istrue ? "150to200" : "3to4"}
          title={istrue ? "$150 - 200" : "rate 3 to 4"}
          name="test2"
          istrue={istrue}
        />
        <Input
          isChecked={isChecked}
          setischecked={setIsChecked}
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          value={istrue ? "above200" : "4to5"}
          title={istrue ? "Above 200$" : "rate 4 to 5"}
          name="test2"
          istrue={istrue}
        />
      </div>
    </>
  );
};
export default Filter;
