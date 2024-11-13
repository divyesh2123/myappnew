import React from 'react'
import {Field, Form, Formik, ErrorMessage} from 'formik';
import  * as Yup from 'yup'

export default function Registration() {

    const handleSubmit = (values)=>{

        console.log(values);
    }

    const t = (data)=>{
        let error= {};
         if(!data.firstName)
         {
            error["firstName"] = "first Name is required";

         }
          if(!data.lastName)
         {
            error["lastName"] = "last Name is required";
         }

         return error;
    }

    const ValidationInfo = Yup.object().shape({
        firstName: Yup.string().matches("[A-Za-z]","invalid name").required("firstName is required"),
        lastName: Yup.string().required("lastName is required"),
        email: Yup.string().required("email should reqiued").email("invalid email"),
        password: Yup.string().required("password is required"),
        confirmpassword: Yup.string().
        required("Confirm Password is required")
        .oneOf([Yup.ref('password')],"password should match with confirm password"),
        isActive: Yup.bool().oneOf([true],"please select the option")
    })
  return (
    <Formik initialValues={{
        firstName: "",
        lastName : "",
        email : "",
        isActive: false,
        gender:"",
        country: "",
        password: "",
        confirmpassword: ""
    }}
    onSubmit={handleSubmit}
    validate={t}
    >

        <Form >
        <Field  name="firstName"  placeholder="firstName"/>
        <ErrorMessage name='firstName'/>
        <Field  name="lastName" placeholder="lastName"/>
        <ErrorMessage name='lastName'/>
        <Field  name="email" placeholder="email"/>
        <ErrorMessage name='email'/>
        <Field  name="password" type="password" placeholder="password"/>
        <ErrorMessage name='password'/>
        <Field  name="confirmpassword" type="password" placeholder="confirmpassword"/>
        <ErrorMessage name='confirmpassword'/>
        <Field type="checkbox" name="isActive"/>
        <ErrorMessage name='isActive'/>
        <Field type="radio" name="gender" value="male"/>
        <Field type="radio" name="gender" value="female"/>
        <ErrorMessage name='gender'/>
        <Field as="select" name="country">
                <option value="IN">India</option>
                <option value="US">US</option>
        </Field>
    
        <button type='submit'>SaveInfo</button>
        </Form>


    </Formik>
  )
}
