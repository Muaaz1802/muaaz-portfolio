import React from "react";
import './About.css';
// import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.svg";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" className="about-profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>So, I don't only design webpages, also I love Competitive programming. I do LeetCode, CodeChef problems as well.</p>
                        <p>I have created projects like, Spotify Clone, Desktop Assistant, TicTacToe Game and many more....</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>C</p><hr style={{ width: "100%" }} /></div>
                        <div className="about-skill"><p>C++</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "100%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                {/* <p style={{color:"grey"}}>Achievements will be shown here.</p> */}
                {/* <div className="about-achievement">
                    <h1>7+</h1>
                    <p>PROJECTS CREATED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>LEETCODE QUESTIONS SOLVED</p>
                </div> */}
                {/* <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div> */}
            </div>
        </div>
    );
}

export default About;