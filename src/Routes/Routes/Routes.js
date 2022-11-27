import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Blog from "../../Pages/Home/Blog/Blog";
import Error from "../../Pages/Home/Error/Error";
import Home from "../../Pages/Home/Home/Home";
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

                path: '/blog',
                element: <Blog></Blog>,


            },

        ],
    }


]);

export default router;