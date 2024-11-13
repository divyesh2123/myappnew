import React, { useState } from 'react'

export default function MyForm() {

    const [firstName,setfirstName]= useState('');
    const [lastName,setlastName]= useState('');

    const changeFirstName = (e)=>{
        setfirstName(e.target.value);
    }

    const changeLastName = (e)=>{
        setlastName(e.target.value);
    }
    const mySubmit = (e)=>{

        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
    }
  return (
    <form onSubmit={mySubmit}>

        <input type='text' name="firstName" onChange={changeFirstName} />
        <input type='text' name="lastName" onChange={changeLastName} />
        <input type='submit' value="save"/>
    </form>
  )
}
