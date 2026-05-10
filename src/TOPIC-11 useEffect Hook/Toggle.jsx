import React, { useEffect, useState } from 'react'

const Toggle = () => {
    const [login, setLogin] = useState(false);
    const [count, setCount] = useState(0);

    //? Different methods for writing useEffect
    // useEffect(()=>{console.log('2. useEffect')},[]);        /         //! empty dependency: Only one time run hoga ui banne ke baad(after rendering phase). because new Dep:[] pre dep: null 
    // useEffect(()=>{console.log('2. useEffect')});                    //! no dependecny :Jitni baar component  rerender hoga tab tab execute hoga
    // useEffect(()=>{console.log('2. useEffect')},[count]);               //! with dependecies: useEffect kewal count ke change hone par or first time render hone par hi execute hoga
    
    useEffect(()=>{                                                     //! manually handle kra ki first time render par na  ho execute kewal count ke change hone pr hi ho
        if(count==0)
        {
            return 
        }
        console.log('2. useEffect')},[count]);



    console.log('1. Toggle render');
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>increment</button>


        {login?<h2>Welcome User</h2>:<h2>Please Login</h2>}
        <button onClick={()=>setLogin(!login)}>CLick</button>
      
    </div>
  )
}

export default Toggle
