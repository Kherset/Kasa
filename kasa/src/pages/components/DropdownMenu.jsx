import React, { useState, useEffect } from 'react';

const DropdownMenu = ({children, title, widthMobile, widthDesktop}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getWidth = () => {
    return windowWidth >= 600 ? widthDesktop : widthMobile;
  };


  return (
    <div className="dropdown" style={{ width: getWidth() }}>
      <div className="dropdown-button" onClick={toggleMenu}>
        <h4 className='dropdown-title'>{title}</h4>
        <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">

        {children}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
