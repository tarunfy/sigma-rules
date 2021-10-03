import React, { useState, useEffect, useContext } from "react";
import { auth } from "../config/firebaseConfig";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 z-0 h-60 w-100"
        viewBox="10 100 2000 200"
      >
        <path
          fill="#14FFEC"
          fillOpacity="1"
          d="M0,96L26.7,106.7C53.3,117,107,139,160,160C213.3,181,267,203,320,197.3C373.3,192,427,160,480,160C533.3,160,587,192,640,202.7C693.3,213,747,203,800,181.3C853.3,160,907,128,960,144C1013.3,160,1067,224,1120,245.3C1173.3,267,1227,245,1280,208C1333.3,171,1387,117,1413,90.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="container z-30 pb-6 lg:pb-0  flex flex-col justify-center  h-screen mx-auto items-center ">
        <h1 className="font-Montserrat z-30 mb-10  cursor-default font-semibold text-center text-white lg:text-6xl lg:mb-6 text-2xl">
          <span className="lg:text-7xl text-3xl">“</span> A sigma male never
          tells he's a sigma, he only tells the
          <span className="font-bold text-tertiary"> rules</span>
          <span className="lg:text-7xl text-3xl"> ”</span>
        </h1>
        <div className="bg-white z-30 lg:w-96 w-80 lg:pt-10 lg:pb-8  lg:px-10 p-5 rounded-lg">
          <form className="mb-0 lg:space-y-6" onSubmit={handleSubmit}>
            <div>
              <h1 className="text-center text-2xl font-Montserrat font-bold mb-3">
                Join the Sigma Community <span>👊🏻</span>
              </h1>
              {error && !loading && (
                <p className="text-red-500 pt-2 pb-4 text-center">{error}</p>
              )}
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="off"
                  id="password"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                />
              </div>
              <div className="flex mt-3  justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-2/4 flex justify-center py-3 px-4 border border-transparent shadow-sm bg-secondary font-mono font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black hover:shadow-secondary transition-all duration-300 ease-in-out "
                >
                  {loading ? "Signing Up..." : "Sign up"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
