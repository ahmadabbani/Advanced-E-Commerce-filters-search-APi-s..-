import "./input.css";
import { ChangeEvent } from "react";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
  istrue: boolean;
  isChecked: boolean;
  setischecked: Dispatch<SetStateAction<boolean>>;
}

function Input(props: InputProps) {
  const {
    handleChange,
    value,
    title,
    name,
    handleRateChange,
    istrue,
    isChecked,
    setischecked,
  } = props;
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <label
          className="sidebar-label-container"
          htmlFor={value}
          style={{
            width: "85px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "bolder",
          }}
        >
          <span>{title}</span>
        </label>
        <input
          onClick={() => {
            if (isChecked) {
              setischecked(false);
            }
          }}
          onChange={(event) =>
            istrue ? handleChange(event) : handleRateChange(event)
          }
          type="radio"
          value={value}
          name={name}
          id={value}
          style={{ width: "13px" }}
        />
      </div>
    </>
  );
}

export default Input;
