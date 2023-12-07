import React from "react";
import "../styles/ExperiencePage.scss";

const ExperiencePage = () => {
  return (
    <div className="experienceData">
      <div class="container">
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>Company Name : Aquis Tech</div>
            <div>January 2021 - December 2021</div>
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>Company Name : Polyglots</div>
            <div>January 2022 - August 2023</div>
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>Company Name = ....... </div>
            <div>present</div>
          </div>
        </div>
      </div>

      <div className="courseDetails">
        <div className="courseTitle">Course</div>
        <ul>
        <li className="courseData">Full Stack Software Development</li>
        </ul>
      </div>
    </div>
  );
};
export default ExperiencePage;
