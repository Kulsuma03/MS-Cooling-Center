import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Products from "../../Pages/Products/Products";
import DisplayError from "../../Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <Products></Products>
            },
            {
                path: '/allproduct',
                loader: () => fetch('http://localhost:5000/allproduct'),
                element: <AllProduct></AllProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

