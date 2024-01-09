import React, { useState } from 'react';




const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggleMenu}>

        <h4 className='dropdown-title'>{props.content} </h4>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <span className='dropdown-item'> Element 1 </span>
          <span className='dropdown-item'> Element 2 </span>
          <span className='dropdown-item'> Element 3 </span>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
