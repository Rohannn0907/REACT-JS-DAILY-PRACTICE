import React, { useState } from 'react'

const Toggle = () => {
    const [login, setlogin] = useState(false);
    const handleCLick=()=>{
        setlogin(!login)
    }
  return (
    <div id='toggle'>
        {login ?<h1>WELCOME USER</h1>:<h1>Please Login</h1>}   

        <button onClick={handleCLick}>Toggle</button>
    
      
    </div>
  )
}

export default Toggle
