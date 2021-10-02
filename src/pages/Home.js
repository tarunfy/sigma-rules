import React from "react";
import Rule from "../components/Rule";
function Home() {
  return (
    <div className="container relative mx-auto py-5 flex flex-col justify-center items-center">
      <div
        id="list"
        className="container bg-lightBlack 2xl:h-primary lg:h-secondary rounded-lg mx-auto w-3/5  pt-2"
      >
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
      </div>
      <button className="absolute right-0 bottom-2 font-Roboto bg-lightBlack text-tertiary font-semibold text-xl rounded-md py-2 px-4 flex items-center justify-center transform transition duration-500 hover:scale-110 hover:bg-tertiary hover:text-secondary">
        Add
      </button>
    </div>
  );
}

export default Home;
