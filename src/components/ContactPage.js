import React from "react";
import "../styles/ContactPage.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  emailId: yup
    .string()
    .email("email format is not valid")
    .required("email is required"),
  mobileNumber: yup
    .string()
    .required("Mobile number is required")
    .min(10, "too short mobile number")
    .max(10, "too long mobile number"),
  contactPurpose: yup.string().required("Contact purpose is required"),
});

const ContactPage = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      emailId: "",
      mobileNumber: "",
      contactPurpose: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
 
  const onSubmit = (data) => {
    const serviceId = "service_kjcbyhp";
    const templateId = "template_z8hc69k";
    const publicKey = "LiNsMC3YPHBYQ_GMp";

    console.log("form submitted ====>", data);
    
    const templateParams = {
      from_name: data.fullName, 
      from_email: data.emailId,
      to_name: "Rohan odel",
      mobile_number: data.mobileNumber,
      contact_purpose: data.contactPurpose
    }
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email send successfully");
      reset();
    })
    .catch((error)=> {
      console.log('Failed to send email');
    })
  };

  return (
    <div className="contactData">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="contactField">
          <div className="nameLabel">Full Name</div>
          <div>
            <TextField
              style={{ width: "100%" }}
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
              {...register("fullName")}
            />
            <div style={{ color: "hsl(35, 100%, 68%)" }}>
              {errors.fullName?.message}
            </div>
          </div>
        </div>
        <div className="contactField">
          <div className="nameLabel">Email Id</div>
          <div>
            <TextField
              style={{ width: "100%" }}
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
              {...register("emailId")}
            />
            <div style={{ color: "hsl(35, 100%, 68%)" }}>
              {errors.emailId?.message}
            </div>
          </div>
        </div>
        <div className="contactField">
          <div className="nameLabel">Mobile Number</div>
          <div>
            <TextField
              style={{ width: "100%" }}
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
              {...register("mobileNumber")}
            />
            <div style={{ color: "hsl(35, 100%, 68%)" }}>
              {errors.mobileNumber?.message}
            </div>
          </div>
        </div>
        <div className="contactField">
          <div className="nameLabel">Contact purpose</div>
          <div>
            <TextField
              style={{ width: "100%" }}
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
              {...register("contactPurpose")}
            />
            <div style={{ color: "hsl(35, 100%, 68%)" }}>
              {errors.contactPurpose?.message}
            </div>
          </div>
        </div>
        <div className="buttonSubmit">
          <Button variant="contained" className="buttonData" type="submit">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;