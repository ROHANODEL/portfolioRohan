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
          label="Name"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
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
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
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
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
            },
          }}
          inputProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="contactField">
        <div className="nameLabel">Address</div>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
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
