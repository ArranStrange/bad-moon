import React from "react";
import MerchHoodies from "./merch-hoodies";
import MerchHat1 from "./merch-hat";
import { useMediaQuery } from "react-responsive";

export default function Products() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust max-width based on your breakpoint
  return (
    <div
      className={`flex justify-center items-center ${
        isMobile ? "w-[60%]" : "w-[100%]"
      }`}
    >
      <div className="h-full flex flex-col justify-start items-start md:flex-row overflow-scroll">
        <MerchHoodies />
        <MerchHat1 />
        {/* <MerchHat /> */}
      </div>
    </div>
  );
}
