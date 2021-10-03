import React from "react";

function Login() {
  return (
    <div className="container flex flex-col justify-center h-screen mx-auto items-center">
      <h1 className="font-Montserrat cursor-default font-semibold text-center text-white text-6xl mb-6">
        <span className="text-7xl">“</span> Boys, we've gathered here today for
        a very important meeting 🤝 <span className="text-7xl">”</span>
      </h1>
      <div className="bg-white w-96 pt-10 pb-8 px-10 shadow-2xl rounded-lg">
        <form className="mb-0 space-y-6">
          <div>
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
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm bg-secondary  font-Roboto font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
