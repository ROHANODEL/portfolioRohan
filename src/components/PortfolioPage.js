import React, { useState } from "react";
import "../styles/PortfolioPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import AboutPage from "./AboutPage";
import SkillPage from "./SkillPage";
import EducationPage from "./EducationPage";
// import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import ContactPage from "./ContactPage";
import ExperiencePage from "./ExperiencePage";
import profile from "../image/rohanImg.jpg";

const PortfolioPage = () => {
  const [menuColor, setMenuColor] = useState(1);
  const [title, setTitle] = useState("About Me");
  // const navigate = useNavigate();

  const menuListData = [
    {
      id: 1,
      name: "About",
      content: "About Me",
    },
    {
      id: 2,
      name: "Experience",
      content: "Experience",
    },
    {
      id: 3,
      name: "Skills",
      content: "My Skills",
    },
    {
      id: 4,
      name: "Education",
      content: "Education",
    },
    {
      id: 5,
      name: "Contact",
      content: "Contact",
    },
  ];

  const menuButton = (data) => {
    setMenuColor(data.id);
    setTitle(data.content);
    // if (data.id === 1) {
    //   navigate("/");
    // } else if (data.id === 2) {
    //   navigate("/experience");
    // } else if (data.id === 3) {
    //   navigate("/skill");     
    // } else if (data.id === 4) {
    //   navigate("/education");
    // } else if (data.id === 5) {
    //   navigate("/contact");
    // }
  };
  return (
    <div className="mainClass">
      <div className="innerClass">
        <div className="leftMenu">
          <div className="imageBox">
            <img src={profile} style={{height:'9rem', width:'10rem'}}/>
          </div>
          <div className="leftName">Rohan odel</div>
          <div className="jobPosition">Software Developer</div>
          <hr style={{ width: "12rem" }}></hr>
          <div className="basicData">
            <div className="leftIcon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="basicInfo">
              <div>EMAIL</div>
              <div>rohanodel1997@gmail.com</div>
              {/* display: -webkit-box; 
            -webkit-box-orient: vertical; 
            -webkit-line-clamp: 2;  ====> line count
            overflow: hidden; 
            text-overflow: ellipsis;  */}
            </div>
          </div>
          <div className="basicData">
            <div className="leftIcon">
              <FontAwesomeIcon icon={faMobile} />
            </div>
            <div className="basicInfo">
              <div>MOBILE</div>
              <div>8625864927</div>
            </div>
          </div>
          <div className="basicData">
            <div className="leftIcon">
              <FontAwesomeIcon icon={faCakeCandles} />
            </div>
            <div className="basicInfo">
              <div>BIRTHDAY</div>
              <div>March 5, 1997</div>
            </div>
          </div>
          <div className="leftBottomIcon">
            <div className="bottomIcon">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bottomIcon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="bottomIcon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="rightMenuTitle">{title}</div>
          <div className="rightMenuData">
            {menuListData.map((data, index) => (
              <div
                className="menuList"
                style={menuColor === data.id ? { color: "#44e4af" } : {}}
                onClick={() => {
                  menuButton(data);
                }}
              >
                {data.name}
              </div>
            ))}
          </div>
          <div>
            {
              title === "About Me" ? <AboutPage/>
              : title === "Experience" ? <ExperiencePage/>
              : title === "My Skills" ? <SkillPage/>
              : title === "Education" ? <EducationPage/>
              : <ContactPage/>
            }
            {/* <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skill" element={<SkillPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
