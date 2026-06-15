// import {createRoot} from "react-dom/client"
// import App from "./App"
// import "./index.css"

// createRoot(document.getElementById("root")).render(

//   <App/>
// )



// import {createRoot} from "react-dom/client"
// import App from "./App"
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//  <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// )




// import { createRoot } from "react-dom/client";
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // pages
// import App from "./App";
// import Home from "./Topic-14 React Routing/Home";
// import Profile from "./Topic-14 React Routing/Profile";
// import Shop from "./Topic-14 React Routing/Shop";
// import Order from "./Topic-14 React Routing/Order";

// // Routing configuration
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "order",
//         element: <Order />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />,
// );






import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages`
import App from "./App";
import Home from "./Topic 14.1 React Routing (Dynamic Route)/pages/Home";
import Profile from "./Topic 14.1 React Routing (Dynamic Route)/pages/Profile";
import Shop from "./Topic 14.1 React Routing (Dynamic Route)/pages/Shop"
import Order from "./Topic 14.1 React Routing (Dynamic Route)/pages/Order"
import NotFound from "./Topic 14.1 React Routing (Dynamic Route)/pages/NotFound";
import ProductPage from "./Topic 14.1 React Routing (Dynamic Route)/pages/ProductPage";

// auth pages
import Signup from "./Topic 14.1 React Routing (Dynamic Route)/pages/Signup";
// Routes
import ProtectedRoute from "./Topic 14.1 React Routing (Dynamic Route)/routes/ProtectedRoute";
// API 
import { getUserProfile, handleSignup } from "./Topic 14.1 React Routing (Dynamic Route)/services/api";
import ErrorPage from "./Topic 14.1 React Routing (Dynamic Route)/pages/ErrorPage";
import Login from "./Topic 14.1 React Routing (Dynamic Route)/pages/Login";

// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            loader: getUserProfile,
            errorElement: <ErrorPage />
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "order",
            element: <Order />,
          },
        ],
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    action: handleSignup, // {requires backend so for learning purpose only here}
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} >
//         <Route index element={<Home />} />
//         <Route element={<ProtectedRoute />}>
//           <Route path="profile" element={<Profile />} />
//           <Route path="shop" element={<Shop />} />
//           <Route path="order" element={<Order />} />
//         </Route>
//         <Route path="products/:productId" element={<ProductPage />} />
//       </Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="signup" element={<Signup />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </BrowserRouter>
// );
