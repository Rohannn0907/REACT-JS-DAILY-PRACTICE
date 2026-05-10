import React, { useState } from 'react'

const Counter = () => {
    console.log('Counter rerender')


    // let count=0;                         //? this is simple js variable
    let [ count,setCount]= useState(0);      //? count=[] array return krega useState hook ko jab call karenge                //? x=[value, updaterFn]                                     
    const handleClick=()=>{
        console.log('Clicked');
        setCount(count+1);         //? jab jab ye updater function call hoga tab tab ye react ko inform krega ki is component ko dobara call kro matlb rerender karo
        setCount((prev)=>prev+1)   //! best way to write. in case multile setCount
      }
  return (
    <div id="counter">
    <h1>Count:{count}</h1>
    {/* <button onClick={handleClick}>CLICK KARRRR</button>      */}
    {/* //!MORE PRECISE WAY */}
    <button onClick={()=>{setCount(count+1)}}>ADD</button>
    </div>
  )
}
export default Counter










//* Whenever state variable changes React will re-render the component.
