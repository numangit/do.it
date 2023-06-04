import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import logo from '../assets/logo.png';

const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-6 mr-3 sm:h-9" alt="do.it Logo" />
                    <span className="self-center text-xl whitespace-nowrap dark:text-white text-blue-800 font-logo font-extrabold">DO.iT</span>
                </Link>

                <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    {
                        user?.uid &&
                        <>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">Home</Link>
                            <Link to="/addTask" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">Add Task</Link>
                            <Link to="/myTasks" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">My Tasks</Link>
                            <Link to="/completed" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm">Completed</Link>

                        </>
                    }
                </div>

                <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 Do.it </p>
            </div>
        </footer>
    );
};

export default Footer;