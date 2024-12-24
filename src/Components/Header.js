import React, { useState } from "react"; 
import { NavLink } from "react-router-dom"; 
import "../CSS/Header.css"; 
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Components/Icon"; 

function Header() {   
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const handleMenuItemClick = () => setClick(false); // Close on item click

  return (     
    <nav className="navbar">         
      <div className="nav-container">         
        <NavLink exact to="/" className="nav-logo">             
          <span>PHOTOZONE</span>                        
        </NavLink>                   
        <ul className={click ? "nav-menu active" : "nav-menu"}>             
          <li className="nav-item">               
            <NavLink exact to="/" className="nav-links" onClick={handleClick}>                 
              Home               
            </NavLink>             
          </li>             
          <li className="nav-item">               
            <NavLink exact to="/about" className="nav-links" onClick={handleClick}>                 
              About               
            </NavLink>             
          </li>             
          <li className="nav-item">               
            <NavLink exact to="/services" className="nav-links" onClick={handleClick}>                 
              Services               
            </NavLink>             
          </li>    
          <li className="nav-item">               
            <NavLink exact to="/pages" className="nav-links" onClick={handleClick}>                 
              Pages               
            </NavLink>             
          </li>               
          <li className="nav-item">               
            <NavLink exact to="/contact" className="nav-links" onClick={handleClick}>                 
              Contact               
            </NavLink>             
          </li>             
          <li className="nav-item">               
            <NavLink exact to="/projects" className="nav-links" onClick={handleClick}>                 
              Projects               
            </NavLink>             
          </li>             
          <li className="nav-item">               
            <NavLink exact to="/booksession" className="nav-links" onClick={handleClick}>                 
              Book a Session               
            </NavLink>             
          </li>           
        </ul>           
        <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon"><HamburgetMenuOpen /></span>
                    ) : (
                        <span className="icon"><HamburgetMenuClose /></span>
                    )}
                </div>
            </div>
        </nav>  
  ); 
}  

export default Header;

