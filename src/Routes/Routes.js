import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import AllBuyers from "../Components/AllBuyers";
import AllSellers from "../Components/AllSellers";
import ErrorPage from "../Components/ErrorPage";
import MyBuyers from "../Components/MyBuyers";
import MyOrders from "../Components/MyOrders";
import MyProducts from "../Components/MyProducts";
import MyWishList from "../Components/MyWishList";
import ReportedItems from "../Components/ReportedItems";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Catagory from "../Pages/Catagory";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/'),
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <PrivateRoute><Catagory></Catagory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
//             {
//                 path: '/myreviews',
//                 element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
//             },
//             {
//                 path: '/addservice',
//                 element: <PrivateRoute><AddService></AddService></PrivateRoute>
//             },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
//             {
//                 path: '/update/:id',
//                 element: <Update></Update>,
//                 loader: ({ params }) => fetch(`https://electrical-solution-server.vercel.app/reviews/${params.id}`)
//             },
//             // {
//             //     path: '/checkout/:id',
//             //     element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
//             //     loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
//             // }
        ]
    },
    {
       path: '/dashboard',
       element:  <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
       errorElement: <ErrorPage></ErrorPage>,
       children: [
        {
            path: '/dashboard',
            element: <MyOrders></MyOrders>
        },
        {
            path: '/dashboard/mywishlist',
            element: <MyWishList></MyWishList>
        },
        {
            path: '/dashboard/addproduct',
            element: <AddProduct></AddProduct>
        },
        {
            path: '/dashboard/myproducts',
            element: <MyProducts></MyProducts>
        },
        {
            path: '/dashboard/mybuyers',
            element: <MyBuyers></MyBuyers>
        },
        {
            path: '/dashboard/allsellers',
            element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
        },
        {
            path: '/dashboard/allbuyers',
            element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
        },
        {
            path: '/dashboard/reporteditems',
            element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
        }
       ]
    }
]);