import React from 'react';

const Stats = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
          <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
            312 435
          </h3>
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-800">
            We are thrilled to announce that we have reached the milestone of 300,000 users! We are grateful for the support of our community, and we are committed to providing them with the best possible experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;