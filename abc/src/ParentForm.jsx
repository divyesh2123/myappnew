import React, { useState } from 'react'
import ChildForm from './ChildForm';

export default function ParentForm() {

    const [input,setinput]= useState('');
    const [data,setData]= useState([]);

    const handleChange = (e)=>{
        setinput(e.target.value)
    }

    const deleteInformation = (index)=>
    {
        let j = [...data];
        j.splice(index,1);
        setData(j);

    }

    const handleSave = ()=>{
        let d = [...data];
        d.push(input);
        setData(d);
    }
  return (
    <div>
        <input type='text' onChange={handleChange}/>

        <input type='button' onClick={handleSave} value="save"/>

        <ChildForm myData= {data} deleteInformation={deleteInformation}/>
    </div>
  )
}
