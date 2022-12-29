import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Completed from "../Pages/Completed/Completed";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/myTasks',
                element: <PrivateRoute><MyTasks></MyTasks></PrivateRoute>
            },
            {
                path: '/completed',
                element: <PrivateRoute><Completed></Completed></PrivateRoute>
            },
            {
                path: '/signIn',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/taskDetails/:id',
                element: <PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/myTask/${params.id}`)
            },
            {
                path: '/myTasks/edit',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            }

        ]
    }
])

export default router;