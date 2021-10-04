import React from "react";
import moment from "moment";

function Rule({ user, date, rule, ruleNum }) {
  return (
    <div className="relative cursor-default w-full pt-6 pb-3 lg:px-10 px-3 mt-3 border-b-2 border-primary border-opacity-60 transform transition duration-500 hover:scale-105">
      <p
        id="rule-num"
        className="absolute top-0 lg:left-10 left-3
         text-white font-medium"
      >
        {`#${ruleNum}`}
      </p>
      <div className="flex justify-between items-center font-normal text-base font-Roboto text-quaternary">
        <div>
          <h1>{rule}</h1>
          <p>{moment(date.toDate()).calendar()}</p>
        </div>
        <div>
          ~<span className="font-medium">{user}</span>
        </div>
      </div>
    </div>
  );
}

export default Rule;
