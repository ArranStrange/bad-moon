import React from "react";
import Products from "./merch-products";
import { motion } from "framer-motion";
import ImageCycle from "../homepage/hooks/ImageCycle";
import UseScrollPosition from "../homepage/hooks/useScrollPosition";
import BlackSun from "../homepage/assets/design-assets/SUN-BLACK.png";
import WhiteSun from "../homepage/assets/design-assets/SUN-WHITE.png";
import RedSun from "../homepage/assets/design-assets/SUN-RED.png";

const images = [BlackSun, WhiteSun, RedSun];

export default function MerchMain() {
  const scrollY = UseScrollPosition();
  return (
    <div className="flex flex-col mt-[75px] justify-around items-center h-screen overflow-hidden">
      <motion.div
        animate={{ rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 360 }}
        style={{
          transform: `translateY(${scrollY > 0 ? 500 : 0}px)`,
          opacity: scrollY > 0 ? 0 : 1,
          transition: "transform 1s, opacity 0.6s",
          width: "50px",
          height: "50px",
        }}
      >
        <ImageCycle images={images} />
      </motion.div>
      <h3>MERCH</h3>
      <Products />
    </div>
  );
}
