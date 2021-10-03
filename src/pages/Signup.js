import React from "react";

function Signup() {
  return (
    <div className="container flex flex-col justify-center  h-screen mx-auto items-center ">
      <h1 className="font-Montserrat cursor-default font-semibold text-center text-white lg:text-6xl lg:mb-6 mb-5 text-2xl">
        <span className="lg:text-7xl text-3xl">“</span> A sigma male never tells
        he's a sigma, he only tells the
        <span className="font-bold text-tertiary"> rules</span>
        <span className="lg:text-7xl text-3xl"> ”</span>
      </h1>
      <div className="bg-white lg:w-96 w-80 lg:pt-10 lg:pb-8  lg:px-10 p-5 rounded-lg">
        <form className="mb-0 lg:space-y-6">
          <div>
            <h1 className="text-center text-2xl font-Montserrat font-bold mb-3">
              Join the Sigma Community <span>👊🏻</span>
            </h1>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="username"
                  autoComplete="off"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                autoComplete="off"
                id="password"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <div className="flex mt-3  justify-center">
              <button
                type="submit"
                className="w-2/4 flex justify-center py-3 px-4 border border-transparent shadow-sm bg-secondary font-mono font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black hover:shadow-secondary transition-all duration-300 ease-in-out "
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
