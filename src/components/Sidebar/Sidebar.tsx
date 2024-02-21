import "./Sidebar.css";
import { useState, ChangeEvent, MouseEvent } from "react";
import Filter from "./Filter";
interface SidebarProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Sidebar = (props: SidebarProps) => {
  const { handleChange, handleRateChange, handleClick } = props;
  const [isTrue, setIsTrue] = useState<boolean>(true);

  return (
    <>
      <section className="sidebar">
        <Filter
          handleChange={handleChange}
          handleRateChange={handleRateChange}
          handleClick={handleClick}
          istrue={isTrue}
          setistrue={setIsTrue}
        />
      </section>
    </>
  );
};

export default Sidebar;
