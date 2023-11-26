import React from "react";
import "../styles/EducationPage.scss";

const EducationPage = () => {
  return (
    <div className="educationData">
      <div class="container">
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>SSC</div>
            <div>Maharashtra State Board</div>
            <div>Passout Year : March 2012</div> 
            {/* 55% */}
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>HSC</div>
            <div>Maharashtra State Board</div>
            <div>Passout Year : February 2014</div>
            {/* 48% */}
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>BCA (Bachelor of Computer Application)</div>
            <div>Savitribai Phule Pune University</div>
            <div>Passout Year : August 2021</div>
            {/* 76% */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
