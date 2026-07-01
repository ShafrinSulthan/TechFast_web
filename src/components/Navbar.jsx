import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); 
  const navRef = useRef(null);

  const menuToggle = () => setMenuOpen((prev) => !prev);

  const handleDropdownToggle = (name) => (e) => {
    if (e.target.closest(".dropdown-menu")) {
      return; 
    }

    e.stopPropagation(); 
    
    if (window.innerWidth <= 900) {
      e.preventDefault(); 
      setOpenMenu((prev) => (prev === name ? null : name));
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); 
    setMenuOpen(false);   
    setOpenMenu(null);    
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? "nav-active" : ""}`} ref={navRef}>
      
      <i className="fa-solid fa-bars menu-icon" onClick={menuToggle}></i>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className={`dropdown ${openMenu === "home" ? "open" : ""}`} onClick={handleDropdownToggle("home")}>
          <Link to = '/'>Home</Link>
          <i className="fa-solid fa-caret-down ms-2"></i>
          <ul className="dropdown-menu">
            <li><Link to = '/home1' onClick={handleLinkClick}>Home 1</Link></li>
            <li><Link to = '/home2' onClick={handleLinkClick}>Home 2</Link></li>
            <li><Link to = '/home3' onClick={handleLinkClick}>Home 3</Link></li>
          </ul>
        </li>

        <li><Link to = '/about' onClick={handleLinkClick}>About</Link></li>


        <li className={`dropdown ${openMenu === "service" ? "open" : ""}`} onClick={handleDropdownToggle("service")}>
          <Link to = '/'>Services</Link>
          <i className="fa-solid fa-caret-down ms-2"></i>
          <ul className="dropdown-menu">
            <li><Link to= '/service' onClick={handleLinkClick}>Service</Link></li>
            <li><Link to = '/service-details' onClick={handleLinkClick}>Service Details</Link></li>
          </ul>
        </li>

        
        <li className={`dropdown ${openMenu === "portfolio" ? "open" : ""}`} onClick={handleDropdownToggle("portfolio")}>
          <Link to = '/'>Portfolio</Link>
          <i className="fa-solid fa-caret-down ms-2"></i>
          <ul className="dropdown-menu">
            <li><Link to = '/portfolio1' onClick={handleLinkClick}>Portfolio 1</Link></li>
            <li><Link to = '/portfolio2' onClick={handleLinkClick}>Portfolio 2</Link></li>
            <li><Link to = '/portfolio3' onClick={handleLinkClick}>Portfolio 3</Link></li>
          </ul>
        </li>

        <li><Link to = '/pages' onClick={handleLinkClick}>Pages</Link></li>
        <li><Link to = '/blog' onClick={handleLinkClick}>Blog</Link></li>
        <li><Link to = '/contact' onClick={handleLinkClick}>Contact</Link></li>
      </ul>

      <button className="button-primary login-btn text-light">Get In Touch</button>
    </nav>
  );
};

export default Navbar;