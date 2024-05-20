import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
          {
            path:'/',
            element: <Home />
          },
          {
            path:'/menu',
            element: <Menu />
          },
          {
            path:'/order/:category',
            element:  <Order /> 
          },
          {
            path:'/login',
            element: <Login />
          },
          {
            path:'/signUp',
            element: <SignUp />
          },
          {
            path:'secret',
            element: <PrivateRoute><Secret /> </PrivateRoute>
          },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
          {
            path: 'cart',
            element: <Cart></Cart>
          }
      ]
    }
  ]);

  export default router