// RadioInput.js
import React from "react";

const RadioInput = ({ name, value, label, icon : Icon, onChange, checked }) => {
  if(Icon) {
    return (
      <div className="w-full md:mx-4 flex flex-col items-center">
        {Icon && <img src={Icon} className="w-10"></img>}
        {checked && <input
          type="radio"
          id={`${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          checked
          className="peer w-4 h-4 p-4 sm:mt-5 mt-1 sm:mb-0 mb-4"
        />}
        {!checked && <input
          type="radio"
          id={`${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          className="peer w-4 h-4 p-4 sm:mt-5 mt-1 sm:mb-0 mb-4"
        />}
        
      </div>
    );
  }
  else {
    return (
      <div className="w-full md:mx-4">
        {checked && <input
          type="radio"
          id={`${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          checked
          className="peer opacity-0 w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
        />}
        {!checked && <input
          type="radio"
          id={`${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          className="peer opacity-0 w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
        />}
        
        {Icon && <Icon/>}
        <label 
          htmlFor={`${name}-${value}`}
          className="flex cursor-pointer  bg-[#D10269] text-black bg-opacity-20  justify-center items-center h-10  peer-checked:bg-opacity-100 peer-checked:text-white text-[17px] text-sm font-medium p-3 px-5 rounded-md"
        >
        {label && label}
        </label>
      </div>
    );
  }

};

export default RadioInput;
