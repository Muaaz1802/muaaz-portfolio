import React from "react";
import "./Header.css";
import profile_img from "../../assets/profile_img.svg";

const goToConnect = () => {
    window.open("https://linktr.ee/SyedMuaaz");
}

const goToResume = () => {
    window.open("https://drive.google.com/drive/folders/1UwdL7o7iydm8CY-jxnB_BPv_PWsXQJQT?usp=drive_link");
}

const Header = () => {
    return (
        <div id="home" className="header">
            <img src={profile_img} alt="" className="profile-img"/>
            <h1><span>I'm Syed Muaaz,</span> frontend developer based in India</h1>
            <p>I'm a second year student at Ramdeobaba College of Management, Nagpur. I'm an AIML enthusiast and I like to <span className="code">Code</span></p>
            <div className="header-action">
                <div className="header-connect" onClick={goToConnect}>Connect with me</div>
                <div className="header-resume" onClick={goToResume}>My Resume</div>
            </div>
        </div>
    );
}

export default Header;