import NachosImage from "../assets/photos/landing-nachos.JPG";
import PardonsImage from "../assets/photos/landing-padrons.jpg";
import UseScrollPosition from "../hooks/useScrollPosition";
import { motion } from "framer-motion";

export default function About2() {
  const scrollY = UseScrollPosition();

  return (
    <div className="flex flex-col h-screen justify-center items-center overflow-hidden">
      {/* IMAGE */}
      <motion.div
        className="absolute bottom-0 right-0 overflow-hidden rounded-tl-full rounded-bl-full h-[90%] w-30"
        initial={{ opacity: 0, y: 400 }}
        animate={
          scrollY > 900 && scrollY < 1800
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 400, x: 500 }
        }
        transition={{ duration: 1, delay: 2 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <img style={{ height: "100%" }} src={NachosImage} alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          scrollY > 900 && scrollY < 1800 ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 1 }}
        className="text-start"
      >
        <motion.h4 whileHover={{ scale: 1.05 }}>BOLD FLAVOURS</motion.h4>
        <motion.h4 whileHover={{ scale: 1.05 }}>BIG PORTIONS</motion.h4>
        <motion.h4 whileHover={{ scale: 1.05 }}>WELSH PRODUCE</motion.h4>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="absolute bottom-0 left-0 overflow-hidden rounded-tr-full rounded-br-full h-[90%] w-30"
        initial={{ opacity: 0, y: -400 }}
        animate={
          scrollY > 900 && scrollY < 1800
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 400, x: -500 }
        }
        transition={{ duration: 1, delay: 2 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <img
          style={{ height: "100%", transform: "scale(1.3)" }}
          src={PardonsImage}
          alt=""
        />
      </motion.div>
    </div>
  );
}
