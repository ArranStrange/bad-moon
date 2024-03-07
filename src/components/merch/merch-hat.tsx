import HatTest1 from "./assets/store-test-images/organic-baseball-cap-oyster-front-65e9ef79481b4.jpg";
import HatTest2 from "./assets/store-test-images/organic-baseball-cap-oyster-front-65e9ef7948315.jpg";
import HatTest3 from "./assets/store-test-images/organic-baseball-cap-oyster-product-details-2-65e9ef7948528.jpg";

export default function MerchHat() {
  return (
    <div className="flex justify-center items-center w-[650px]">
      <div className="grid grid-cols-4 gap-4 w-full min-w-[370px] max-w-[650px] p-4 rounded-lg shadow-lg bg-white">
        {/* Description column */}
        {/* First column */}
        <div className="col-span-2 row-span-2 flex">
          <img src={HatTest1} alt="Hat test 1" className="w-full rounded-lg" />
        </div>
        {/* Second column */}
        <div className="col-span-1 row-span-2 flex flex-col justify-between">
          <img src={HatTest2} alt="Hat test 1" className="w-full rounded-lg" />
          <img
            src={HatTest3}
            alt="Hat test 1"
            className="mt-4 w-full rounded-lg"
          />
        </div>
        {/* Third column */}
        <div className="col-span-1 row-span-2 flex flex-col justify-end items-center">
          <div className="mt-5 text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Esse corporis,
            temporibus.
          </div>
          <h5 className="mt-4 text-center">17</h5>

          <div className="flex justify-end items-end mt-4">
            <label className="radio">
              <input type="radio" name="size" value="M" className="hidden" />
              <span className="bg-black text-white px-4 py-2 rounded-lg mb-2 mx-1 cursor-pointer">
                M
              </span>
            </label>
          </div>
          <div className="flex w-[75%] mt-4">
            <button className="bg-red text-white px-4 py-2 rounded-lg">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
