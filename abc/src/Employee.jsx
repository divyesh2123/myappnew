import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Emp from './Emp';
import Registration from './Registration';

export default function Employee() {

    const [data,setData]= useState([]);

    useEffect(()=>{

            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(y=>{
                setData(y.data);
            })

    },[])
  return (
    <div>
    {
        data.map((value,index)=>{

            return (<Emp index={index}>
                <Registration>d</Registration>
            </Emp>)
        })
        
    }</div>
  )
}
