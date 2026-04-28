import React from 'react'

const Card = () => {
    const changeText=(e)=>{
        console.log('clicked',e);
    }
  return (
    <div>
    <h2>Card component</h2>
    <button onClick={changeText}>Click</button>   {/*don't writne changeText() wrna automatically call hojaega react m bina click kre */}
      
    </div>
  )
}

export default Card
