import React from "react";
import { motion } from "framer-motion";
import UseScrollPosition from "../hooks/useScrollPosition";
import ImageCycle from "../hooks/ImageCycle";
import BlackSun from "../assets/design-assets/SUN-BLACK.png";
import WhiteSun from "../assets/design-assets/SUN-WHITE.png";
import RedSun from "../assets/design-assets/SUN-RED.png";

const images = [BlackSun, WhiteSun, RedSun];

const Landing: React.FC = () => {
  const scrollY = UseScrollPosition();

  return (
    <motion.div
      className="flex flex-row justify-center items-center h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col flex-shrink w-screen h-full overflow-hidden justify-center items-center">
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          style={{
            transform: `translateY(${scrollY > 100 ? -500 : 0}px)`,
            opacity: scrollY > 100 ? 0 : 1,
            transition: "transform 1s, opacity 0.6s",
            width: "50px",
            height: "50px",
          }}
        >
          <ImageCycle images={images} />
        </motion.div>
        <motion.h6
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className=""
          style={{
            transform: `translateX(${scrollY > 100 ? -500 : 0}px)`,
            opacity: scrollY > 100 ? 0 : 1,
            transition: "transform 1s, opacity 0.6s",
          }}
        >
          Quesabirria
        </motion.h6>
        <motion.h2
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className=""
          style={{
            transform: `translateY(${scrollY > 100 ? -50 : 0}px)`,
            transitionDelay: scrollY > 100 ? ".3s" : "0s",
            opacity: scrollY > 100 ? 0 : 1,
            transition: "transform 0.5s, opacity 0.6s",
          }}
        >
          BADMOON
        </motion.h2>
        <motion.h6
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          className=""
          style={{
            transform: `translateX(${scrollY > 100 ? 250 : 0}px)`,
            opacity: scrollY > 100 ? 0 : 1,
            transition: "transform 0.5s, opacity 0.6s",
          }}
        >
          mexican street food
        </motion.h6>
      </div>
    </motion.div>
  );
};

export default Landing;
