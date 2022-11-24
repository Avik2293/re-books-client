import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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
                element: <></>,
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
    }
]);