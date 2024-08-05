import React, { useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const goToConnect = () => {
    window.open("https://linktr.ee/SyedMuaaz");
}

const Navbar = () => {

    const [menu, setMenu] = React.useState("about");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div class="navbar">
            <div className="name-title"><h1>MuaaZ</h1></div>
            <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
                <li> <AnchorLink className="anchor-link" offset={50} href="#home"> <p onClick={() => setMenu("home")} style={{ color: menu === "home" ? "#438dbb" : "white" }}>Home</p> </AnchorLink></li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#about"> <p onClick={() => setMenu("about")} style={{ color: menu === "about" ? "#438dbb" : "white" }}>About</p> </AnchorLink></li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#services"> <p onClick={() => setMenu("services")} style={{ color: menu === "services" ? "#438dbb" : "white" }}>Services</p> </AnchorLink></li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#work"> <p onClick={() => setMenu("work")} style={{ color: menu === "work" ? "#438dbb" : "white" }}>Portfolio</p> </AnchorLink></li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#contact"> <p onClick={() => setMenu("contact")} style={{ color: menu === "contact" ? "#438dbb" : "white" }}>Contact</p> </AnchorLink></li>
            </ul>
            <div className="nav-connect" onClick={goToConnect}>Connect with Me</div>
        </div>
    );
}

export default Navbar;