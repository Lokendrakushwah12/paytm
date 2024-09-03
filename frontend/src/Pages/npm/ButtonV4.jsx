import React, { useState } from "react";

const ButtonV4 = ({ title, borderRadius, color, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default Values
  const brRadius = borderRadius ? borderRadius : "8px";
  const Bgcolor = color ? color : "#212121";

  return (
    <>
      <div
        className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border p-2 pr-0 transition-all duration-500 hover:pl-0 hover:pr-2 ${className} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderRadius: brRadius,
          backgroundColor: isHovered ? Bgcolor : "#ffffff",
        }}
      >
        <svg
          style={{ backgroundColor: Bgcolor }}
          className="h-6 w-6 translate-x-[0%] rotate-90 rounded-full p-1 transition-all group-hover:-translate-x-[150%]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.42999 4L15.5 10.07L9.42999 16.14"
            stroke="#fff"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M4 10.0699L15 10.0699"
            stroke="#fff"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
        <h3
          style={{ color: isHovered ? "#ffffff" : "#000000" }}
          className="z-20 translate-x-[20%] text-[16px] font-[500] transition-all group-hover:-translate-x-[20%]"
        >
          {title}
        </h3>
        <svg
          className="h-6 w-6 translate-x-[150%] rotate-90 rounded-full bg-[#fff] p-1 transition-all group-hover:translate-x-[0%]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.42999 4L15.5 10.07L9.42999 16.14"
            stroke="#212121"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M4 10.0699L15 10.0699"
            stroke="#212121"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default ButtonV4;
