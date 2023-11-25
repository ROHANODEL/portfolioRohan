import React from "react";
import "../styles/AboutPage.scss";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = () => {
  const cardInfo = [
    {
      name: "Frontend developer",
      details: "frontend web application develop using React js and Next js",
    },
    {
      name: "Backend Developer",
      details: "backend web application develop using Java and spring boot",
    },
    {
      name: "Mobile App Developer",
      details: "mobile application develop using React Native",
    },
  ];
  return (
    <div className="aboutData">
      <div className="aboutDetails">
        <div className="aboutDetailsData">
          I have experience as a Software Developer. Till now i had worked on 4
          Projects that are -
        </div>
        <div className="aboutDetailsData">1- School Application Using React JS -( Freelancing project ).</div>
        <div className="aboutDetailsData">2- Finance Web Application Using React JS.</div>
        <div className="aboutDetailsData">3- Institute Mobile Application Using React Native.</div>
        <div className="aboutDetailsData">4- Flight Booking Web Application Using Next JS.</div>
      </div>
      <div className="doing">What I'm Doing</div>
      <div className="cardContainer">
        {cardInfo.map((data, index) => ( 
          <div className="card">
            <div className="cardImage">
              <div>
                {index === 0 ? (
                  <FontAwesomeIcon icon={faCode} className="cardIcon" />
                ) : index === 1 ? (
                  <FontAwesomeIcon icon={faTerminal} className="cardIcon" />
                ) : (
                  <FontAwesomeIcon icon={faMobile} className="cardIcon" />
                )}
              </div>
            </div>
            <div className="cardDataInfo">
              <div className="cardDataInfo_name">{data.name}</div>
              <div>{data.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
