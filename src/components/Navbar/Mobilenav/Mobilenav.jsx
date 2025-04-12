import React from 'react';
import './Mobilenav.css';


const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`mobile-menu ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
        >
            <div
                className="mobile-nav-container"
                onClick={(e) => e.stopPropagation()} // Prevents closing the menu when clicking inside
            >
                <img src='' alt="Logo" className="logo" />
                <ul>
                    <li>
                        <a href="#home" className="menu-item">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="menu-item">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="menu-item">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="menu-item">
                            Contact Me
                        </a>
                    </li>
                </ul>
                <button
                    className="contact-btn"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents closing the menu when the button is clicked
                        alert('Hire me button clicked!');
                    }}
                >
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default MobileNav;