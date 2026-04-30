import React,{useState} from 'react'
const Home=()=>{
    const [login, setLogin]=useState(false);

    if(!login){
        return <div>
            <h2>Please Login</h2>
            <button onClick={()=>{setLogin(!login)}}>Login</button>
        </div>
        
    }

    return (
        <div id='home'>
            <h2>Welcome to Home page</h2>
            
            <button onClick={()=>{setLogin(!login)}}>Logout</button>
        </div>
    )

}
export default Home;