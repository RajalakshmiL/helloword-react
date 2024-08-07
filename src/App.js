import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Groceries from "./components/Groceries";
const Groceries = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      name : 'Rajalakshmi',
    }
    setuserName(data.name);
  },[]);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{LoggedInuser:userName,setuserName}}> 
        <div className="app">
          <Header/>
          <Outlet/>
        </div>;
      </UserContext.Provider>
  </Provider>)
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Looks cool!</h1>}><Groceries/></Suspense>
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error></Error>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
