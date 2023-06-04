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
                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Overview
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Features
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Pricing
                    </a>
                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Careers
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Help
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400">
                        Privacy
                    </a>
                </div>

                <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 Meraki UI. </p>
            </div>
        </footer>
    );
};

export default Footer;