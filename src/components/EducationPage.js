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
            <div>savitribai phule pune university</div>
            <div>Passout year = March 2012</div> 
            {/* 55% */}
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>HSC . (science)</div>
            <div>savitribai phule pune university</div>
            <div>Passout year = February 2014</div>
            {/* 48% */}
          </div>
        </div>

        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>

          <div class="content">
            <div>BCA . (Graduation)</div>
            <div>savitribai phule pune university</div>
            <div>Passout year = August 2021</div>
            {/* 76% */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
