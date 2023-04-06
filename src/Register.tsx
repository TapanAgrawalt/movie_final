import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { SignupSchema } from "./Validation/Valid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Register() {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");

  const [nameError, setNameError] = useState<any>();

  const [emailError, setEmailError] = useState<any>();
  const [PasswordError, setPasswordError] = useState<any>();
  const [ConfirmPasswordError, setConfirmPasswordError] = useState<any>();

  // console.log(emails)
  // console.log(passwords)

  const url = "http://localhost:3002/signup";
  const RegisterHandler = async (e: any) => {
    e.preventDefault();

    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      }),
    });

    const res = await response.json();
    console.log("kenil", res.message);
    if (response.status === 201) {
      toast.success(res.message);
      navigate("/login?message=Register%20Success");
    } else {
      toast.error(res.message);
    }
  };
  const nameHandler = (e: any) => {
    if (e.target.value == "") {
      setNameError("name cannot be empty");
    } else if (e.target.value.length < 2) {
      setNameError(" name should be greater than 2 character");
    } else {
      setNameError("");
      setName(e.target.value);
    }
  };

  const emailHandler = (e: any) => {
    if (e.target.value == "") {
      setEmailError("email cannot be empty");
    } else if (
      !e.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError("email is not valid");
    } else {
      setEmailError("");
      setEmail(e.target.value);
    }
  };
  const passwordHandler = (e: any) => {
    if (e.target.value == "") {
      setPasswordError("password cannot be empty");
    } else if (e.target.value.length < 8) {
      setPasswordError("password should be atleast 8 character");
    } else if (!e.target.value.match(/[A-Z]/)) {
      setPasswordError("include one capital character");
    } else {
      setPasswordError("");
      setPassword(e.target.value);
    }
  };
  const confirmpasswordHandler = (e: any) => {
    if (e.target.value == "") {
      setConfirmPasswordError("confirm password cannot be empty");
    } else if (e.target.value !== password) {
      setConfirmPasswordError("not matching");
    } else {
      setConfirmPasswordError("");
      setConfirm_Password(e.target.value);
    }
  };
  const validate = (e: any) => {
    e.preventDefault();
    if (name == "") {
      setNameError("name should not be empty");
    }
    if (email == "") {
      setEmailError("email should not be empty");
    }
    if (password == "") {
      setPasswordError("password should not be empty");
    }
    if (confirm_password == "") {
      setConfirmPasswordError("confirm password should not be empty");
    } else {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
    }

    Full();
  };
  const Full = () => {
    if (
      nameError == "" &&
      emailError == "" &&
      PasswordError == "" &&
      ConfirmPasswordError == ""
    ) {
      console.log("apio call");
      RegisterHandler(event);
    }
  };
  return (
    <div className={classes.main}>
      <ToastContainer autoClose={2000} limit={1} />
      <form className={classes.form} onSubmit={validate}>
        <h1>Register</h1>

        <div className={classes.upbtn}>
          <div>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-helper">Name</InputLabel>
              <Input
                id="component-helper"
                name="email"
                // value={emails}
                onChange={nameHandler}
                onBlur={handleBlur}
              />
              <FormHelperText
                id="component-helper-text"
                style={{ color: "red" }}
              >
                {nameError}
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-helper">Email</InputLabel>
              <Input
                id="component-helper"
                name="email"
                // value={emails}
                onChange={emailHandler}
                onBlur={handleBlur}
              />
              <FormHelperText
                id="component-helper-text"
                style={{ color: "red" }}
              >
                {emailError}
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-helper">Password</InputLabel>
              <Input
                id="component-helper"
                type="password"
                name="password"
                // value={passwords}
                onChange={passwordHandler}
                onBlur={handleBlur}
              />
              <FormHelperText
                id="component-helper-text"
                style={{ color: "red" }}
              >
                {PasswordError}
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl variant="standard">
              <InputLabel htmlFor="component-helper">
                Confirm_Password
              </InputLabel>
              <Input
                id="component-helper"
                type="password"
                name="password"
                // value={passwords}
                onChange={confirmpasswordHandler}
                onBlur={handleBlur}
              />
              <FormHelperText
                id="component-helper-text"
                style={{ color: "red" }}
              >
                {ConfirmPasswordError}
              </FormHelperText>
            </FormControl>
          </div>
        </div>
        <div className={classes.downbtn}>
          <div className={classes.btn}>
            <Button variant="contained" size="large" type="submit">
              Register
            </Button>
          </div>
          <p>
            have an account<a href="/login">Login</a>
          </p>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default Register;
