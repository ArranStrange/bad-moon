import { motion } from "framer-motion";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link as LinkRouter, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
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
              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="md:p-4 py-2 block hover:text-red"
                href="#"
              >
                <LinkRouter to="/">HOME</LinkRouter>
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="md:p-4 py-2 block hover:text-red"
                href="#"
              >
                MENU
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="md:p-4 py-2 block hover:text-red"
                href="#"
              >
                {" "}
                <LinkRouter to="/merch">MERCH</LinkRouter>
              </motion.a>
            </li>
            <li>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                className="md:p-4 py-2 block hover:text-red"
                href="#"
              >
                CONTACT
              </motion.a>
            </li>
          </ul>
        </div>
        <motion.a
          style={{ padding: "15px", cursor: "pointer" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          <FaShoppingBasket size={25} />
        </motion.a>
      </nav>
    </div>
  );
}
