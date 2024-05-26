import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email Format"),
  panNumber: yup
    .string()
    .required("Required")
    .min(10, "PAN No. should be exactly 10 digits"),

  password: yup
    .string()
    .required("Required")

    .min(8, "Password should be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character"),
  userType: yup
    .string()
    .required("Required")
    .oneOf(["individual", "company", "family"], "Invalid Selection"),
});
