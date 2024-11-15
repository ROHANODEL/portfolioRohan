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
      details: "Frontend web application developed using React js and Next js",
    },
    {
      name: "Backend Developer",
      details: "Backend web application developed using Java and Spring Boot",
    },
    {
      name: "Mobile App Developer",
      details: "Mobile application developed using React Native",
    },
  ];
  return (
    <div className="aboutData">
      <div className="aboutDetails">
        <div className="aboutDetailsData">
          I have experience as a Software Developer. Till now i had worked on 5 projects those are:
        </div>
        <ul>
        <li className="aboutDetailsData">School Web Application developed Using React JS</li>
        <li className="aboutDetailsData">Finance Web Application developed Using React JS</li>
        <li className="aboutDetailsData">Institute Mobile Application developed Using React Native</li>
        <li className="aboutDetailsData">Flight Booking Web Application developed Using Next JS</li>
        <li className="aboutDetailsData">AI Web Application developed Using React JS and Next JS</li>
        </ul>
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
