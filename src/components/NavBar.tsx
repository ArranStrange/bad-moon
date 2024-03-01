import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

export default function NavBar() {
  return (
    <div>
      <nav
        className="
          flex flex-wrap
          fixed
          top-0
          z-50
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg 
          text-white
          bg-black
        "
      >
        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-red" href="#">
                HOME
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-red" href="#">
                MENU
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-red" href="#">
                MERCH
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-red" href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <a style={{ padding: "15px", cursor: "pointer" }}>
          <FaShoppingBasket size={25} />
        </a>
      </nav>
    </div>
  );
}
