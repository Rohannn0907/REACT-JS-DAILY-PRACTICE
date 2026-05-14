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

// pages
import App from "./App";
import Home from "./Topic 14.1 React Routing (Dynamic Route)/pages/Home";
import Profile from "./Topic 14.1 React Routing (Dynamic Route)/pages/Profile";
import Shop from "./Topic 14.1 React Routing (Dynamic Route)/pages/Shop"
import Order from "./Topic 14.1 React Routing (Dynamic Route)/pages/Order"
import NotFound from "./Topic 14.1 React Routing (Dynamic Route)/pages/NotFound";
import ProductPage from "./Topic 14.1 React Routing (Dynamic Route)/pages/ProductPage";

// auth pages
import Login from "./Topic 14.1 React Routing (Dynamic Route)/pages/Login";

// Routes
import ProtectedRoute from "./Topic 14.1 React Routing (Dynamic Route)/routes/ProtectedRoute";
// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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