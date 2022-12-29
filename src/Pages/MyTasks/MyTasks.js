import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GrEdit } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const MyTasks = () => {
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

    //function to complete task
    const handleTaskComplete = (id) => {
        fetch(`http://localhost:5000/myTasks/completed/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Congratulations, Task Completed!')
                    refetch();
                }
            })
    }

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
                <h1 className='text-2xl text-center p-4'>
                    <span className='text-amber-500 font-semibold'>Manage</span> your
                    {
                        myTasks?.length > 0
                            ? " tasks."
                            : " task."
                    }
                </h1>
                {/* card */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 lg:p-10'>
                    {
                        myTasks?.map(task =>
                            <div key={task?._id} className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                {/* name and description */}
                                <div className='p-3 text-left'>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task?.taskName}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {task?.taskDescription}
                                    </p>
                                </div>
                                <div className='flex justify-end my-1'>
                                    {
                                        task?.completed
                                            ? <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 flex items-center">
                                                <BsFillHandThumbsUpFill />&#160;Completed
                                            </span>
                                            : <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900 flex items-center">
                                                <BsFillHandThumbsDownFill />&#160;Not Complete
                                            </span>
                                    }
                                </div>
                                {/* buttons */}
                                <div className="inline-flex justify-center w-full " role="group">
                                    <Link to={`/taskDetails/${task?._id}`}>
                                        <button type="button" className=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center">
                                            <CgDetailsMore />&#160;Details
                                        </button>
                                    </Link>
                                    <Link to="/completed">
                                        <button
                                            onClick={() => handleTaskComplete(task._id)}
                                            type="button" className=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-green-500 focus:text-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-green-500 dark:focus:text-white flex items-center">
                                            <GoCheck />&#160;complete
                                        </button>
                                    </Link>
                                    <Link to="/myTasks/edit">
                                        <button type="button" className=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white border-l border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white flex items-center">
                                            <GrEdit />&#160;Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteTask(task._id)}
                                        type="button" className=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white flex items-center">
                                        <AiFillDelete />&#160;Delete
                                    </button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTasks;