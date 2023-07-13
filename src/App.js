import React ,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error"
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import InstaMart from "./Components/InstaMart"
import {createBrowserRouter , RouterProvider ,Outlet  } from "react-router-dom"


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

    </div>
  );
};


const  About =lazy( ()=>import("./Components/About"));
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>loaddinng.....</h1>}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
      path:"/restaurants/:resId",
       element:<RestaurantMenu />
      },
      {
        path:"/instamart",
        element:<InstaMart />
      },
    ],
    errorElement:<Error /> ,
 
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
