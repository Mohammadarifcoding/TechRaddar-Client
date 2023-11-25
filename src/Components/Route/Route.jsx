import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Providers/PrivateRoute";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyProfile from "../Pages/DashBoard/User/MyProfile";
import Products from "../Pages/Products/Products";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/products',
          element:<Products></Products>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'myprofile',
          element:<MyProfile></MyProfile>
        }
      ]
    }
  ]);

  export default router