import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import AllBuyers from "../Components/AllBuyers";
import AllSellers from "../Components/AllSellers";
import ErrorPage from "../Components/ErrorPage";
import MyBuyers from "../Components/MyBuyers";
import MyOrders from "../Components/MyOrders";
import MyProducts from "../Components/MyProducts";
import MyWishList from "../Components/MyWishList";
import Payment from "../Components/Payment";
import ReportedItems from "../Components/ReportedItems";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Catagory from "../Pages/Catagory";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/mywishlist',
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
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