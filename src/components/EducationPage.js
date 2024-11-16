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

import React, { useState, useEffect } from "react";
import "../styles/EducationPage.scss";
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

const EducationPage = () => {
  const [open, setOpen] = useState(false);
  const [arrName, setArrName] = useState();

  useEffect(() => {
    const handlePopState = (event) => {
      if (open) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
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
    if (data === 0) {
      setArrName(sscArray);
    } else if (data === 1) {
      setArrName(hscArray);
    } else if (data === 2) {
      setArrName(graduationArray);
    } else {
    }
  };

  const sscArray = [
    "SSC",
    "School Name ==> Rambhau Mhalgi Foundation",
    "Start Date ==> march 2010",
    "End Date ==> march 2012",
    "Obtained total marks ==>",
    "Percentage ==> "
  ];

  const hscArray = [
    "HSC (science)",
    "College Name ==> Sant Tukaram",
    "Start Date ==> march 2012",
    "End Date ==> February 2014",
    "Obtained total marks ==>",
    "Percentage ==> "
  ];

  const graduationArray = [
    "Graduation (BCA)",
    "College name ===> Jaikranti College",
    "Start Date ==> april 2019",
    "End Date ==> April 2021",
    "Obtained total marks ==>",
    "Percentage ==> "
  ];

  const steps = [
    {
      label: "SSC",
      description: `Maharashtra State Board`,
      newDescription: "Passout Year : March 2012",
    },
    {
      label: "HSC",
      description: "Maharashtra State Board",
      newDescription: "Passout Year : February 2014",
    },
    {
      label: "BCA",
      labelData: "(Bachelor of Computer Application)",
      description: `Savitribai Phule Pune University`,
      newDescription: "Passout Year : August 2021",
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
            {steps.map((step, index) => (
              <Step active={true} key={step.label}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  <div className="stepData">
                    <div className="circleData">{step.label}</div>
                    <Button
                      variant="contained"
                      className="morButton"
                      onClick={() => {
                        handleClickOpen();
                        arrayDatafun(index);
                      }}
                    >
                      more info
                    </Button>
                  </div>
                </StepLabel>
                {step?.labelData ? (
                  <StepContent>{step?.labelData}</StepContent>
                ) : (
                  <></>
                )}
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Typography>{step.newDescription}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
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
          <DialogTitle
            style={{ color: "#44e4af" }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            Education Details
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
            <CloseIcon style={{ color: "#44e4af" }} />
          </IconButton>
          <DialogContent dividers>
            {arrName?.map((data) => (
              <div>
              <Typography gutterBottom>{data}</Typography>
              <hr/>
              </div>
            ))}
          </DialogContent>
        </div>
      </BootstrapDialog>
    </div>
  );
};

export default EducationPage;
