import React from 'react';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { AiFillDelete } from 'react-icons/ai';

const Completed = () => {
    return (
        <div className='mt-20 lg:h-screen '>
            <div>
                {/* card */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 p-5 lg:p-10'>
                    <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* name and description */}
                        <div className='p-3 text-left'>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Title here</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Task Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui esse repellendus quasi doloribus ipsa labore!</p>
                        </div>
                        {/* buttons */}
                        <div className="inline-flex justify-center w-full " role="group">
                            <button type="button" className="py-2 px-4 text-sm font-semibold text-gray-600 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white flex items-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;