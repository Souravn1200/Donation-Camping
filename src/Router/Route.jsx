import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Errorpage from "../Pages/Errorpage/Errorpage";
import CardDetails from "../Pages/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader: () => fetch('/public/details.json')
            },
            {
                path : "/donation",
                element: <Donation></Donation>
            },
            {
                path : "/statistics",
                element: <Statistics></Statistics>,
                loader : () => fetch('/public/details.json')
            }
            ,
            {
                path : "/cards/:id",
                element: <CardDetails></CardDetails>,
                loader : () => fetch('/public/details.json')
            }
        ]
    }
])

export default myCreatedRoute;