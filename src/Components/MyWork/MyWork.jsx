import React from "react";
import "./MyWork.css";
import MyWork_Data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const goToGithub = () => {
    window.open("https://github.com/Muaaz1802?tab=projects");
}

const MyWork = () => {
    return(
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Projects</h1>
            </div>
            <div className="mywork-message">
                <p>My projects will appear here.</p>
            </div>
            <div className="mywork-container">
                {/* {MyWork_Data.map((work, index) => {
                    return(
                        <img key={index} src={work.w_img} alt="" />
                    )
                })} */}
            </div>
            <div className="mywork-showmore" onClick={goToGithub}>
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork;