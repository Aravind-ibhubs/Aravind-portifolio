import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import {HiX} from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
    { label: "HOME", to: "/" },
    { label: "ABOUT ME", to: "/about" },
    { label: "SKILLS", to: "/skills" },
    { label: "RESUME", to: "/resume" },
    { label: "PORTFOLIO", to: "/portfolio" },
    { label: "CONTACT ME", to: "/contact" }
]

const Navbar = () => {
    const [toggleIcons, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggleIcons);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcons ? 'active' :''}`}>
                    {data.map((item, key) => (
                        <li key={key} className="nav__container__menu__items items">
                            <Link to={item.to} className="nav__container__menu__item__links items__links">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav__icon" onClick={handleToggle}>
                    {
                        toggleIcons  ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
