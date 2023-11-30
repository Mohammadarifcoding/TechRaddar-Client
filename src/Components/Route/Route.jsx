import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Providers/PrivateRoute";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyProfile from "../Pages/DashBoard/User/MyProfile";
import Products from "../Pages/Products/Products";
import Error from "../Pages/Error/Error";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AddProduct from "../Pages/DashBoard/User/AddProduct";
import MyProducts from "../Pages/DashBoard/User/MyProducts";
import UpdateProduct from "../Pages/DashBoard/User/UpdateProduct";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUser/ManageUsers";
import Reported from "../Pages/DashBoard/Moderator/Reported";
import ProductQueue from "../Pages/DashBoard/Moderator/ProductQueue";
import AdminRoute from "../Providers/AdminRoute";
import ModeratorRoute from "../Providers/ModeratorRoute";
import Statistic from "../Pages/DashBoard/Admin/Statics/Statistic";
import ManageCoupon from "../Pages/DashBoard/Admin/ManageCoupon/ManageCoupon";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Error></Error>,
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
        },
        {
          path:'/productDetails/:productId',
          element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,       
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
        },
        {
          path:'addproducts',
          element:<AddProduct></AddProduct>
        },
        {
          path:'myProducts',
          element:<MyProducts></MyProducts>
        },
        {
          path:'updateProduct/:productId',
          element:<UpdateProduct></UpdateProduct>,
          loader:({params})=>fetch(`https://techraddarserver.vercel.app/updateProductGet/${params.productId}`)
        },
        {
          path:'manageUser',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:'reported',
          element:<ModeratorRoute><Reported></Reported></ModeratorRoute>
        },
        {
          path:'productReview',
          element:<ModeratorRoute><ProductQueue></ProductQueue></ModeratorRoute>
        },
        {
          path:'statistic',
          element:<Statistic></Statistic>
        },
        {
          path:'manageCoupon',
          element:<ManageCoupon></ManageCoupon>
        }
      ]
    }
  ]);

  export default router