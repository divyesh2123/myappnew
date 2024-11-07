import React from 'react'

export default function Count() {
    let counter=0;

    const inc = ()=>{
        console.log(counter);
        counter= counter+1;
    }
  return (
    <div>{counter}
    
    <button onClick={inc}>+</button>
    </div>
  )
}
