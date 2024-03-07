import HoodieTest1 from "./assets/store-test-images/unisex-heavy-blend-hoodie-black-front-65e9c15eb5720.jpg";
import HoodieTest2 from "./assets/store-test-images/unisex-heavy-blend-hoodie-black-front-65e9c15eb4795.jpg";
import HoodieTest3 from "./assets/store-test-images/unisex-heavy-blend-hoodie-black-back-65e9c15eb6049.jpg";

export default function MerchHoodies() {
  return (
    <div className="flex justify-center items-center w-[650px]">
      <div className="grid grid-cols-4 gap-4 w-full min-w-[370px] max-w-[650px] p-4 rounded-lg shadow-lg bg-white">
        {/* Description column */}
        {/* First column */}
        <div className="col-span-2 row-span-2 flex">
          <img
            src={HoodieTest1}
            alt="hoodie test 1"
            className="w-full rounded-lg"
          />
        </div>
        {/* Second column */}
        <div className="col-span-1 row-span-2 flex flex-col justify-between">
          <img
            src={HoodieTest2}
            alt="hoodie test 1"
            className="w-full rounded-lg"
          />
          <img
            src={HoodieTest3}
            alt="hoodie test 1"
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
          <h5 className="mt-4 text-center">25</h5>

          <div className="flex justify-end items-end mt-4">
            <label className="radio">
              <input type="radio" name="size" value="S" className="hidden" />
              <span className="bg-black text-white px-4 py-2 rounded-lg mb-2 mx-1 cursor-pointer">
                S
              </span>
            </label>
            <label className="radio">
              <input type="radio" name="size" value="M" className="hidden" />
              <span className="bg-black text-white px-4 py-2 rounded-lg mb-2 mx-1 cursor-pointer">
                M
              </span>
            </label>
            <label className="radio">
              <input type="radio" name="size" value="L" className="hidden" />
              <span className="bg-black text-white px-4 py-2 rounded-lg mb-2  mx-1 cursor-pointer">
                L
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
