import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import  * as yup from 'yup';
export default function MyExampleForm() {

    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });


  const myformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema:validationSchema
  });

  return (
    <form  onSubmit={myformik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={myformik.values.email}
        onChange={myformik.handleChange}
        error={true}
        helperText={myformik.touched.email && myformik.errors.email}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={myformik.values.password}
        onChange={myformik.handleChange}
        error={myformik.touched.password && Boolean(myformik.errors.password)}
        helperText={myformik.touched.password && myformik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
}
