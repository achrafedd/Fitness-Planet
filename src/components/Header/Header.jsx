import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [active, setActive] = useState(false);
    return (
        <header className="app__header">
            <div className="container">
                <div className="app__header-logo">
                    <img src={Logo} alt="Logo" />
                    <span>Fitness Planet</span>
                </div>
                <nav className="app__header-navbar">
                    <ul>
                        <li className="app__header-item">
                            <a href="/" className="active">
                                Home
                            </a>
                        </li>
                        <li className="app__header-item">
                            <a href="#exercises">Exercises</a>
                        </li>
                    </ul>
                </nav>
                <nav className="app__header-mobile-navbar">
                    <FaBars onClick={() => setActive(true)} />
                    <ul className={active ? "active" : ""}>
                        <FaTimes
                            onClick={() => setActive(false)}
                            className="icon"
                        />
                        <li className="app__header-item">
                            <Link to="/" className="active">
                                Home
                            </Link>
                        </li>
                        <li className="app__header-item">
                            <a href="#exercises">Exercises</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
