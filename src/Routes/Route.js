import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Completed from "../Pages/Completed/Completed";
import Home from "../Pages/Home/Home";
import MyTasks from "../Pages/MyTasks/MyTasks";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";

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
                element: <AddTask></AddTask>
            },
            {
                path: '/myTasks',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/completed',
                element: <Completed></Completed>
            },
            {
                path: '/signIn',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Register></Register>
            }

        ]
    }
])

export default router;