import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
    const taskDetails = useLoaderData();

    return (
        <div className='mt-20 lg:h-screen p-2'>
            <h1 className='text-2xl text-center my-3'>
                <span className='text-amber-500 font-semibold'>Your</span> task details.
            </h1>

            <div class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row first-letter:hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:w-4/5 mx-auto">
                <img
                    class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none lg:rounded-lg"
                    src={taskDetails.taskImage}
                    alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{taskDetails.taskName}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Task Description : {taskDetails.taskDescription}
                    </p>
                    <div className='flex justify-evenly'>
                        <span>Date:{taskDetails.postedDate}</span>
                        <span>Completed Status: {taskDetails.completed}</span>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default TaskDetails;