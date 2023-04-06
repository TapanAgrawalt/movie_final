import * as Yup from "yup";
export const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .max(25)
    .required("please enter valid name"),
  email: Yup.string()
    .email()
    .required("please enter valid email"),
  password: Yup.string()
    .min(6)
    .required("please enter valid passsword"),
  confirmpassword: Yup.string()
  
    .oneOf([Yup.ref("password")])
    .required("password does not match")
    ,
});
