import React from "react";

export default function Testimonial() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-2 md:mx-0 container flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-3xl font-semibold leading-none text-center lg:text-4xl">What our customers are saying about us</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">Jul</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">18</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Amazing
              </a>
            </div>
            <p className="mb-5 text-gray-700">
              This tool has been extremely useful for my daily routine and it helped me keep up with my schedule.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Pestro Gale
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Product Manager
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">May</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">6</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Helpful, its a must try
              </a>
            </div>
            <p className="mb-5 text-gray-700">
              I'm so glad I found this tool! It has made my life so much easier by helping me keep track of my tasks and deadlines.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Alex Stratulat
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="pt-1 mr-6 text-center">
            <div className="px-2 pb-1 mb-1 border-b border-gray-400">
              <p className="text-sm text-blue-gray-700">Feb</p>
            </div>
            <div className="px-2">
              <p className="text-lg font-bold">27</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                I love it!
              </a>
            </div>
            <p className="mb-5 text-gray-700">
              This tool has given me peace of mind and allowed me to focus on the things that are important to me.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Susie the Cat
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Doctor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}