import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Allusers from "../../Pages/Dashboard/Allusers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyBuyProduct from "../../Pages/Dashboard/MyBuyProduct";
import Blog from "../../Pages/Home/Blog/Blog";
import Error from "../../Pages/Home/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Home/Home/Product/Product";
import Service from "../../Pages/Home/Home/Service/Service";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Sign-up/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>,

            },
            {

                path: '/home',
                element: <Home></Home>,


            },

            {

                path: '/login',
                element: <Login></Login>,


            },
            {

                path: '/sign-up',
                element: <Signup></Signup>,


            },


            {

                path: '/category/:id',
                element: <PrivateRoute><Product></Product></PrivateRoute>,
                loader: ({ params }) => fetch(`https://rehash-tech-server.vercel.app/category/${params.id}`)

            },
            {

                path: '/blog',
                element: <Blog></Blog>,


            },
            {

                path: '/addProduct',
                element: <AddProduct></AddProduct>,


            },

        ],
    },
    {

        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBuyProduct></MyBuyProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {

                path: '/dashboard/allOrder',
                element: <PrivateRoute><Service></Service></PrivateRoute>,


            },

        ]

    }



]);

export default router;