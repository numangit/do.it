import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Completed = () => {
    const { user } = useContext(AuthContext);

    //api to get products by user email
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myTasks?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    //function to delete task
    const handleDeleteTask = id => {
        fetch(`http://localhost:5000/myTasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Task deleted successfully")
                }
            })
    }

    return (
        <div className='mt-20 lg:h-screen '>
            <div>
                {/* card */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:p-10'>
                    {
                        myTasks?.map(task =>
                            <div key={task?._id}
                                className={task?.completed
                                    ? "max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                                    : "hidden"}>
                                {/* name and description */}
                                <div className='p-3 text-left'>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.taskName}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {task?.taskDescription}
                                    </p>
                                </div>
                                {/* buttons */}
                                <div className="inline-flex justify-center w-full " role="group">
                                    <button
                                        onClick={() => handleDeleteTask(task._id)}
                                        type="button" className="py-2 px-4 text-sm font-semibold text-gray-600 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white flex items-center">
                                        <AiFillDelete />&#160;Delete
                                    </button>
                                    <Link to="/myTasks">
                                        <button type="button" className="py-2 px-4 text-sm font-semibold text-gray-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white  flex items-center">
                                            <ImCross />&#160; Not Complete
                                        </button>
                                    </Link>
                                </div>
                                {/* comment section  */}
                                <div className=' bg-gray-200 p-4 text-center mt-2'>
                                    <h1 className='text-sm font-semibold text-gray-400'>Comment Section</h1>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Completed;