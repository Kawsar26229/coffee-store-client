import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddCoffee from "../pages/AddCoffee";
import Home from "../pages/Home/Home";
import ViewCoffee from "../pages/ViewCoffee";
import EditCoffee from "../pages/EditCoffee";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'></Navigate>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/viewCoffee',
                element: <ViewCoffee></ViewCoffee>
            },
            {
                path: '/editCoffee',
                element: <EditCoffee></EditCoffee>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])