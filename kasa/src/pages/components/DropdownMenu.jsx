import React, { useState } from "react";

const DropdownMenu = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={`dropdown ${isOpen ? "open" : "closed"}`}>
      <li>
        <div className="dropdown-button">
          <p className="dropdown-title">{title}</p>
          <i
            className={`fa-solid fa-chevron-up ${isOpen ? "rotate-180" : ""}`}
            onClick={toggleMenu}
          ></i>
        </div>
        <ul className="dropdown-content">{children}</ul>
      </li>
    </ul>
  );
};

export default DropdownMenu;
