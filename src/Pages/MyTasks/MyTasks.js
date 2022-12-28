import React from 'react';
import { Link } from 'react-router-dom';
import { GrEdit } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { GoCheck } from 'react-icons/go';

const MyTasks = () => {
    return (
        <div className='mt-20 lg:h-screen '>
            <div>
                {/* card */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 lg:p-10'>
                    <div class="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* name and description */}
                        <div className='p-3 text-left'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Title here</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui esse repellendus quasi doloribus ipsa labore!</p>
                        </div>
                        {/* buttons */}
                        <div class="inline-flex justify-center w-full " role="group">
                            <Link to="/taskDetails">
                                <button type="button" class=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white flex items-center">
                                    <CgDetailsMore />&#160;Details
                                </button>
                            </Link>
                            <Link to="/completed">
                                <button type="button" class=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-green-500 focus:z-10 focus:ring-2 focus:ring-green-500 focus:text-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-green-500 dark:focus:text-white flex items-center">
                                    <GoCheck />&#160;complete
                                </button>
                            </Link>
                            <button type="button" class=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white border-l border-t border-b border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white flex items-center">
                                <GrEdit />&#160;Edit
                            </button>
                            <button type="button" class=" py-2 px-2 text-sm font-semibold text-gray-600 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white flex items-center">
                                <AiFillDelete />&#160;Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;