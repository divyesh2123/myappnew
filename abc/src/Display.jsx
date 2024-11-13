import React, { useEffect, useState } from 'react'

export default function Display() {

    let [p,setp] = useState([]);
   
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setp(y);
        })


    },[])
  return (
    <div>{

        p.map((t)=>{

            return (<div>{t.title}</div>)

        })

    }</div>
  )
}
