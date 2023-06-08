import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center">
                        <nav
                            className="col-span-3 md:col-span-4 lg:col-span-6"
                            aria-labelledby="subfooter-links-5-logo-sub"
                        >
                            <h3 className="sr-only" id="subfooter-links-5-logo-sub">
                                Get in touch
                            </h3>
                            <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                                <li className="leading-6">
                                    <Link
                                        to="/"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        T&C
                                    </Link>
                                </li>
                                <li className="leading-6">
                                    <Link
                                        to="/"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li className="leading-6">
                                    <Link
                                        to="/"

                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;