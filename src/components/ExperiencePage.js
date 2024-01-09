// import React from "react";
// import "../styles/ExperiencePage.scss";

// const ExperiencePage = () => {
//   return (
//     <div className="experienceData">
//       <div class="container">
//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>Company Name : Aquis Tech</div>
//             <div>January 2021 - December 2021</div>
//           </div>
//         </div>

//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>Company Name : Polyglots</div>
//             <div>January 2022 - August 2023</div>
//           </div>
//         </div>

//         <div class="step completed">
//           <div class="v-stepper">
//             <div class="circle"></div>
//             <div class="line"></div>
//           </div>

//           <div class="content">
//             <div>Company Name = ....... </div>
//             <div>present</div>
//           </div>
//         </div>
//       </div>

//       <div className="courseDetails">
//         <div className="courseTitle">Course</div>
//         <ul>
//         <li className="courseData">Full Stack Software Developer</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default ExperiencePage;



import React from "react";
import "../styles/ExperiencePage.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

const ExperiencePage = () => {
  const steps = [
    {
      label: "Company Name : Aquis Tech",
      description: `January 2021 - December 2021`,
    },
    {
      label: "Company Name : Polyglots",
      description: "January 2022 - August 2023",
    },
    {
      label: "Company Name = ....... ",
      description: `present....`,
    },
  ];

  const CustomStepIcon = () => (
    <div
      style={{
        width: 24,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#44e4af",
      }}
    />
  );

  return (
    <div className="experienceData">
      <div class="container">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper orientation="vertical">
            {steps.map((step) => (
              <Step active={true} key={step.label}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  <div className="circleData">{step.label}</div>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>

      <div className="courseDetails">
        <div className="courseTitle">Course</div>
        <ul>
          <li className="courseData">Full Stack Software Developer</li>
        </ul>
      </div>
    </div>
  );
};
export default ExperiencePage;
