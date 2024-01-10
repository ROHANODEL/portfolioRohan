import React from "react";
import "../styles/ContactPage.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactPage = () => {
  // const inputStyles = {
  //   borderColor: "red",
  //   borderWidth: "2px",
  //   // You can add more styles as needed
  // };
  return (
    <div className="contactData">
      <div className="contactField">
        <div className="nameLabel">Full Name</div>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#44e4af",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#44e4af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#44e4af",
              },
            },
          }}
          inputProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="contactField">
        <div className="nameLabel">Email Id</div>
        <TextField
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#44e4af",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#44e4af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#44e4af",
              },
            },
          }}
          inputProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="contactField">
        <div className="nameLabel">Mobile Number</div>
        <TextField
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#44e4af",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#44e4af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#44e4af",
              },
            },
          }}
          inputProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="contactField">
        <div className="nameLabel">Contact purpose</div>
        <TextField
          id="outlined-basic"
          label="Contact purpose"
          variant="outlined"
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#44e4af",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#44e4af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#44e4af",
              },
            },
          }}
          inputProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="buttonSubmit">
        <Button variant="contained">submit</Button>
      </div>
    </div>
  );
};

export default ContactPage;
