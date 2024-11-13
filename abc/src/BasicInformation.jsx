import React, { useState } from 'react'

export default function BasicInformation() {

    const [form,setform]= useState({
        firstName: "",
        lastName:"",
        middleName: ""
    });

    const handleChange= (e)=>{

        setform({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(form);

    }
  return (
   
        <form onSubmit={handleSubmit}>

            <input type='text' name="firstName" onChange={handleChange}  style={{"color":"Red"}}/>
            <input type='text'  name="lastName"  onChange={handleChange}/>
            <input type='text'  name="middleName"  onChange={handleChange}/>
            <input type='submit' value="save"/>

        </form>

   
  )
}
