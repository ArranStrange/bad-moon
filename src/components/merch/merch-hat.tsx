import React from "react";
import { useMediaQuery } from "react-responsive";
import HatTest1 from "./assets/store-test-images/organic-baseball-cap-oyster-front-65e9ef79481b4.jpg";
import HatTest2 from "./assets/store-test-images/organic-baseball-cap-oyster-front-65e9ef7948315.jpg";
import HatTest3 from "./assets/store-test-images/organic-baseball-cap-oyster-product-details-2-65e9ef7948528.jpg";

export default function MerchHat1() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust max-width based on your breakpoint

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto shadow-md bg-white rounded-lg overflow-hidden md:max-w-[46rem]">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="h-auto w-full object-cover rounded-lg ml-1"
              src={HatTest1}
              alt="Hoodie Image 1"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center md:text-left">
              Hoodie
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center md:text-left">
              Unisex Heavy Blend Hoodie
            </p>
            <p className="mt-2 text-gray-500 text-center md:text-left">
              This cozy hoodie will keep you warm during chilly days.
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
              <span className="text-gray-500 text-sm">Select Size:</span>
              <div className="ml-4 flex items-center">
                <input
                  type="radio"
                  id="size-s"
                  name="size"
                  value="S"
                  className="ml-4 focus:ring-red h-4 w-4 text-red border-black"
                />
                <label
                  htmlFor="size-s"
                  className="ml-2 block text-sm text-black"
                >
                  S
                </label>
                <input
                  type="radio"
                  id="size-m"
                  name="size"
                  value="M"
                  className="ml-4 focus:ring-red h-4 w-4 text-red border-black"
                />
                <label
                  htmlFor="size-m"
                  className="ml-2 block text-sm text-black"
                >
                  M
                </label>
                <input
                  type="radio"
                  id="size-l"
                  name="size"
                  value="L"
                  className="ml-4 focus:ring-red h-4 w-4 text-red border-black"
                />
                <label
                  htmlFor="size-l"
                  className="ml-2 block text-sm text-black"
                >
                  L
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-center md:justify-center">
              <button className="bg-red hover:bg-black text-white py-2 px-4 rounded">
                Add to Basket
              </button>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="md:flex">
            <div className="flex flex-row justify-start items-start gap-[1px] mt-1 md:w-1/2">
              <img
                className="h-auto w-[25%] rounded-lg"
                src={HatTest2}
                alt="Hoodie Image 2"
              />
              <img
                className="h-auto w-[25%] rounded-lg"
                src={HatTest3}
                alt="Hoodie Image 3"
              />
              <img
                className="h-auto w-[25%] rounded-lg"
                src={HatTest2}
                alt="Hoodie Image 2"
              />
              <img
                className="h-auto w-[25%] rounded-lg"
                src={HatTest3}
                alt="Hoodie Image 3"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
