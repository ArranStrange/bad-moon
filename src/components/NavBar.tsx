import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBasket } from "react-icons/fa";
import { Link as LinkRouter, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="flex h-[50px] items-center justify-between fixed top-0 z-50 w-full py-4 px-4 text-lg text-white bg-black">
      <div className="flex items-center space-x-4">
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className="hover:text-red"
          href="#"
        >
          <LinkRouter to="/">HOME</LinkRouter>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className="hover:text-red"
          href="#"
        >
          MENU
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className="hover:text-red"
          href="#"
        >
          <LinkRouter to="/merch">MERCH</LinkRouter>
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className="hover:text-red"
          href="#"
        >
          CONTACT
        </motion.a>
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
  );
}
