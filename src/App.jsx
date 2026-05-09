// import UL from "./Topic-5 map fn revision/UL"
// import Counter from "./TOPIC-10 LAZY INITIALIZATION/Counter";
// import Counter from "./Topic-7 React state variable/Counter";
// import Card from "./Topic-6 Synthetic Events/Card";
// import Home from "./TOPIC-8 CONDITIONAL RENDERING/Home"
// /import Toggle from "./Topic-9 Conditional Rendering -2/Toggle";
// import Shop from "./Topic 12 useEffect real world/Shop";
// import Toggle from "./TOPIC-11 useEffect Hook/Toggle";
// const App = () => {
//   console.log('App render')
//   return (
//     <div id="app">
//         {/* <UL/> */}
//        {/* <Card /> */}
//        {/* <Counter /> */}

//        {/* <Home /> */}
//        {/* <Toggle /> */}
//        {/* <Counter /> */}
//        {/* <Toggle /> */}
//        <Shop />
      
//     </div>
//   );
// };


// import { Route,Routes } from "react-router-dom";
// import Dashboard from "./Topic-13 React Lifecycle FBC/Dashboard";
// import Profile from "./Topic-13 React Lifecycle FBC/Profile"
// import Page from "./Topic-13 React Lifecycle FBC/Page"
// import Home from "./Topic-13 React Lifecycle FBC/Home";


// const App = () => {
  
//   return (
//    <Routes>
//       <Route path="/" element={<Page />} >
//             <Route  index element={<Home/>} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//             <Route path="/profile" element={<Profile/>} />
//       </Route>
//    </Routes>
//   );
// };

// export default App;









// import React from 'react'
// import Header from './Topic-14 React Routing/Header'
// import { Outlet } from 'react-router-dom'


// const App = () => {
//   return (
//     <div id="app">
//       <Header/>

//       <Outlet />
//     </div>
//   )
// }

// export default App



import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Topic 14.1 React Routing (Dynamic Route)/components/Header'
// import Header from './Topic-14 React Routing/components/Header'


const App = () => {
  return (
    <div id="app">
      <Header />

      <Outlet />
    </div>
  )
}

export default App