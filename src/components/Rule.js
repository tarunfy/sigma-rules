import React from "react";

function Rule() {
  return (
    <div className="relative w-full pt-6 pb-3 px-10 mt-3 border-b-2 border-primary border-opacity-60 transform transition duration-500 hover:scale-105">
      <p
        id="rule-num"
        className="absolute top-0 left-10 text-white font-normal"
      >
        #414
      </p>
      <div className="flex justify-between items-center font-normal text-lg font-Roboto text-quaternary">
        <div>
          <h1>Don't ask for the source, Be the source</h1>
          <p>Today at 4pm</p>
        </div>
        <div>~by daniel</div>
      </div>
    </div>
  );
}

export default Rule;
