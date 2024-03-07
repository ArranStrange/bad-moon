import React from "react";
import MerchHoodies from "./merch-hoodies";
import MerchHat from "./merch-hat";

export default function Products() {
  return (
    <div className="h-screen flex flex-col justify-around items-start md:flex-row overflow-scroll">
      <MerchHoodies />
      <MerchHat />
    </div>
  );
}
