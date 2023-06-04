import React from 'react';

const Subscribe = () => {
  return (
    <div className='container mx-auto bg-slate-800 pattern'>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">Create beautiful website layout with Meraki UI.</h1>
          <p className="mt-6 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
          </p>
          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 bg-white focus-within:border-orange-400 focus-within:ring focus-within:ring-orange-300 dark:focus-within:border-orange-300 focus-within:ring-opacity-40">
            <form className="flex flex-col md:flex-row">
              <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 placeholder-gray-100 bg-transparent border-none appearance-none text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;