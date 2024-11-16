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

import React, { useEffect, useState } from "react";
import "../styles/ExperiencePage.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ExperiencePage = () => {
  const [open, setOpen] = useState(false);
  const [arrName, setArrName] = useState();
    
  useEffect(() => {
    const handlePopState = (event) => {
      if (open) {
        // Prevent the back button navigation
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Listen to the popstate event (triggered on back button)
    window.addEventListener("popstate", handlePopState);

    // Optionally, if you want to handle history.pushState to push a new state when the dialog opens
    if (open) {
      window.history.pushState(null, "", window.location.href);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const arrayDatafun = (data) => {
    if(data === 0){
      setArrName(aquisTechArray)
    }else if(data === 1){
      setArrName(polyglotsSoftwareArray)
    }else if(data === 2){
      setArrName(parenthesesSystemsArray)
    }else{

    }
  }
  const steps = [
    {
      label: "Aquis Tech",
      description: `January 2021 - January 2022`,
    },
    {
      label: "Polyglots Software",
      description: "January 2022 - August 2023",
    },
    {
      label: "Parentheses Systems",
      description: "January 2024 - July 2024",
    },
  ];

  const aquisTechArray = [
    "Company Name ==> Aquis Tech",
    "Start Date ==> 10-1-2021",
    "End Date ==> 5-1-2022",
    <hr/>,
    <hr/>,
    "Project ==> School Web Application",
    "(school application which is related to manage all teachers and students daily school work details)",
    "Technology ==> HTML, CSS, JavaScript, React js, Redux, Formik, Axios, Bootstrap",
  ];

  const polyglotsSoftwareArray = [
    "Company Name ==> Polyglots Software",
    "Start Date ==> 7-1-2022",
    "End Date ==> 17-9-2023",
    <hr/>,
    <hr/>,
    "Project ==> Skill Elevator",
    "(Skill Elevator is a finance web application which is related to tally software learning)",
    "Technology ==> HTML, CSS, JavaScript, React js, Formik, Axios, Bootstrap",
    <hr/>,
    "Project ==> RCC",
    "(RCC (renukai coaching classes) is a institute mobile application which is contain video lecture and pdf of study material)",
    "Technology ==> JavaScript, TypeScript, React Native, React Hook form, Axios, react paper",
    <hr/>,
    "Project ==> udchalo",
    "(udchalo is a flight booking web application where we can check flight, book flight, check flight timing also we can see offers on particular flight)",
    "Technology ==> HTML, CSS, JavaScript, TypeScript, Next js, React Hook form, Axios, Material UI",

  ];

  const parenthesesSystemsArray = [
    "Company Name ==> Parentheses Systems",
    "Start Date ==> 10-1-2024",
    "End Date ==> 1-7-2024",
    <hr/>,
    <hr/>,
    "Project ==> Humac AI",
    "(Humac AI is a AI application in this we can handle and check CNC machine)",
    "Technology ==> HTML, CSS, JavaScript, TypeScript, React js, Next js, React Hook form, Axios, Material UI, React Charts, Hasura, GraphQL",
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
    <div className="experienceData">
      <div class="container">
        <Box sx={{ maxWidth: 600 }}>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step active={true} key={step.label}>
                <StepLabel className="" StepIconComponent={CustomStepIcon}>
                  <div className="stepData">
                    <div className="circleData">{step.label}</div>
                    <Button
                      variant="contained"
                      className="morButton"
                      onClick={() => {
                        handleClickOpen()
                        arrayDatafun(index)}
                      }
                    >
                      more info
                    </Button>
                  </div>
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

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div
          style={{
            backgroundColor: "hsl(240deg 3.72% 25.96%)",
            color: "white",
          }}
        >
          <DialogTitle style={{ color: "#44e4af" }} sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Experience Details
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon style={{ color: "red" }} />
          </IconButton>
          <DialogContent dividers>
            {arrName?.map((data) => (
              <Typography gutterBottom>{data}</Typography>
            ))}
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};
export default ExperiencePage;
