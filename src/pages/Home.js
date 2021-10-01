import React from "react";

function Home() {
  return (
    <div className="container relative mx-auto py-5 flex flex-col justify-center items-center">
      <h1 className="text-4xl  text-tertiary font-Roboto font-bold mb-2">
        Sigma Rules
      </h1>
      <div
        id="list"
        className="container bg-primary 2xl:h-primary lg:h-secondary rounded-lg mx-auto w-3/5 px-3 py-2"
      ></div>
      <button className="absolute right-0 bottom-2 font-Roboto bg-lightBlack text-tertiary font-semibold text-xl rounded-md py-2 px-4 flex items-center justify-center transform transition duration-500 hover:scale-110 hover:bg-tertiary hover:text-secondary">
        Add
      </button>
    </div>
  );
}

export default Home;
