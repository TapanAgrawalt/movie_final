import React, { useState } from "react";
import classes from "./Login.module.css";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { SignupSchema } from "./Validation/Valid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Login() {
  const location = useLocation();
const navigate=useNavigate()
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    if (message === "Register Success") {
      toast.success("Registration successful. You can now log in.");
    }
  }, [location]);
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const [emailError, setEmailError] = useState<any>();
  const [PasswordError, setPasswordError] = useState<any>();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const url = "http://localhost:3002/login";
  const loginHandler = async (e: any) => {
    e.preventDefault();
    setIsButtonDisabled(true);
   
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emails,

        password: passwords,
      }),
    });

    const res = await response.json();
    console.log("kenil", res.message,res.token2);
    if (res.message == "logged in successfully") {
      toast.success("Login Succesfully");
      localStorage.setItem("token" , res.token2);
      localStorage.setItem("loginname" , emails);

navigate("/?message=Login Succesfully")
    } else {
      toast.error(res.message);
    }
    setIsButtonDisabled(false); 
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
      setEmails(e.target.value);
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
      setPasswords(e.target.value);
    }
  };
  const validate = (e: any) => {
    e.preventDefault();

    if (emails == "") {
      setEmailError("email should not be empty");
    }
    if (passwords == "") {
      setPasswordError("password should not be empty");
    } else {
      setEmailError("");
      setPasswordError("");
    }

    Full();
  };
  const Full = () => {
    if (emailError == "" && PasswordError == "") {
      console.log("apio call");
      loginHandler(event);
    }
  };
  return (
    <div className={classes.main}>
      <ToastContainer autoClose={2000} />
      <form className={classes.form} onSubmit={validate}>
        <h1>Login</h1>

        <div className={classes.upbtn}>
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
        </div>
        <div className={classes.downbtn}>
          <div className={classes.btn}>
            <Button variant="contained" size="large" type="submit" disabled={isButtonDisabled} >
              Login
            </Button>
          </div>
          <p>
            Don't have an account<a href="/Register">Register</a>
          </p>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default Login;
