import React from "react";

interface IFilterButtonProps {
  handleClick: (item: string) => void;
  active: string;
}

interface ComponentFilterButton extends IFilterButtonProps {}

const items = [
  "HOME",
  "MEN'S",
  "WOMEN'S",
  "JEWELRY",
  "PERFUME",
  "BLOG",
  "HOT OFFERS",
];

const FilterButton: React.FC<ComponentFilterButton> = ({
  active,
  handleClick,
}) => {
  return (
    <div className="gap-2" style={{ marginBottom: "1rem" }}>
      {items.map((item) => (
        <h1
          key={item}
          className={`${
            active === item.toLowerCase() && "active"
          } navbar__link relative`}
          onClick={() => handleClick(item.toLowerCase())}
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default FilterButton;