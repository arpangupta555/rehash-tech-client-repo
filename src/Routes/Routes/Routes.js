import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Blog/Blog";
import Error from "../../Pages/Home/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Product from "../../Pages/Home/Home/Product/Product";
import Service from "../../Pages/Home/Home/Service/Service";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Sign-up/Signup";
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

                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,


            },
            {

                path: '/service',
                element: <PrivateRoute><Service></Service></PrivateRoute>,


            },
            {

                path: '/category/:id',
                element: <Product></Product>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {

                path: '/blog',
                element: <Blog></Blog>,


            },

        ],
    }


]);

export default router;