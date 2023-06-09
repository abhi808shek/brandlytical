// CheckboxInput.js
import React from "react";

const CheckBoxIconInput = ({ name, value, label, icon: Icon, onChange, checked }) => {
  if(Icon) {
    return (
        <div className="w-full md:mx-4 flex flex-col items-center">
          {Icon && <Icon/>}
          {checked && <input
            type="checkbox"
            id={`${name}-${value}`}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-5 p-4"
            checked
          />}
          {!checked && <input
            type="checkbox"
            id={`${name}-${value}`}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-5 p-4"
            
          />}
          
          
        </div>
      );
  }
  else {
    return (
        <div className="w-full md:mx-4">
        <input
          type="checkbox"
          id={`${name}-${value}`}
          name={name}
          value={value}
          onChange={onChange}
          className="peer opacity-0 w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        />
        <label
          htmlFor={`${name}-${value}`}
          className={`flex cursor-pointer  ${checked ? 'bg-black' : 'bg-[#FD359933]' } bg-opacity-20 justify-center items-center h-10 text-[17px] text-sm font-medium p-3 px-5 rounded-md`}
        >
          {Icon && <Icon className="mr-2" />}
          {label && label}
        </label>
      </div>
    )
  }
  
};

export default CheckBoxIconInput;