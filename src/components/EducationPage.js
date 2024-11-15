// import React from "react";
// import "../styles/EducationPage.scss";

// const EducationPage = () => {
//   return (
//     <div className="educationData">
//       <div class="container">
//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>SSC</div>
//             <div>Maharashtra State Board</div>
//             <div>Passout Year : March 2012</div> 
//             {/* 55% */}
//           </div>
//         </div>

//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>HSC</div>
//             <div>Maharashtra State Board</div>
//             <div>Passout Year : February 2014</div>
//             {/* 48% */}
//           </div>
//         </div>

//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>BCA (Bachelor of Computer Application)</div>
//             <div>Savitribai Phule Pune University</div>
//             <div>Passout Year : August 2021</div>
//             {/* 76% */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationPage;





import React from "react";
import "../styles/EducationPage.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const EducationPage = () => {
  const steps = [
    {
      label: "SSC",
      description: `Maharashtra State Board`,
      newDescription: 'Passout Year : March 2012'
    },
    {
      label: "HSC",
      description: "Maharashtra State Board",
      newDescription: 'Passout Year : February 2014'
    },
    {
      label: "BCA",
      labelData: "(Bachelor of Computer Application)",
      description: `Savitribai Phule Pune University`,
      newDescription: 'Passout Year : August 2021'
    },
  ];

  const CustomStepIcon = () => (
    <div
      style={{
        width: 22,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#44e4af",
      }}
    />
  );

  return (
    <div className="educationData">
      <div class="container">
      <Box sx={{ maxWidth: 600 }}>
          <Stepper orientation="vertical">
            {steps.map((step) => (
              <Step active={true} key={step.label}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                <div className="stepData">
                  <div className="circleData">{step.label}</div>
                  <Button variant="contained" className="morButton">more info</Button>
                  </div>
                </StepLabel>
                {step?.labelData ?  <StepContent>{step?.labelData}</StepContent>: <></>}
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Typography>{step.newDescription}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </div>
  );
};

export default EducationPage;
