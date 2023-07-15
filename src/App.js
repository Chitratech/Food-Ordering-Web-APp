import React ,{lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Error from "./Components/Error"
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter , RouterProvider ,Outlet  } from "react-router-dom"
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import store from "./utils/store";

//const {logedin} =useContext(UserContext);
const AppLayout = () => {
const [userName,setUserName]=useState();



  useEffect( ()=> {
    const data= {
      usernames:"kjame bond",
  }
  setUserName(data.usernames)
},[])
  
  return (

    <Provider store={store} >
    <UserContext.Provider value={{username:userName,setUserName} } > 
    <div className="app">
      <Header />
      <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>
  );
};


const  About =lazy( ()=>import("./Components/About"));
const InstaMart= lazy(()=> import("./Components/InstaMart"));
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
        element: <Suspense fallback={<h1>loading..</h1>}><InstaMart /></Suspense>
      },
      {
path:"/cart",
element:<Cart />
      },
    ],
    errorElement:<Error /> ,
 
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
