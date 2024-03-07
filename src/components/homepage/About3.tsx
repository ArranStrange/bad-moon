import { motion } from "framer-motion";
import UseScrollPosition from "./hooks/useScrollPosition";
import ImageCycle from "./hooks/ImageCycle";
import BlackCrosses from "./assets/design-assets/CROSS-BLACK.png";
import RedCrosses from "./assets/design-assets/CROSS-RED.png";
import WhiteCrosses from "./assets/design-assets/CROSS-WHITE.png";
import {
  BiLogoFacebook,
  BiLogoFacebookCircle,
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
} from "react-icons/bi";

const images = [BlackCrosses, WhiteCrosses, RedCrosses];

export default function About3() {
  const scrollY = UseScrollPosition();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay before starting animation
        staggerChildren: 0.1, // Delay between each letter animation
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  console.log("Scroll Y:", scrollY);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.div
        initial="hidden"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        animate={
          scrollY > 1800 && scrollY < 2300
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 0 }
        }
        transition={{ delay: 2.5, duration: 0.2 }}
        style={{ width: "300px", height: "200px" }}
        className="absolute z-0"
      >
        <ImageCycle images={images} />
      </motion.div>
      <motion.p
        className="text-3xl font-bold z-10"
        variants={containerVariants}
        initial="hidden"
        animate={scrollY > 1800 && scrollY < 2300 ? "visible" : "hidden"} // Trigger animation when scrollY is between 500 and 700
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        {"JOIN US ON SOCIALS".split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.div className="relative flex flex-row bottom-0">
        <motion.a
          className=" hover:text-red"
          style={{ padding: "15px", cursor: "pointer" }}
          initial={{ opacity: 0, y: 500 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          animate={
            scrollY > 1800 && scrollY < 2300
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 500 }
          }
          transition={{ delay: 2, duration: 1 }}
        >
          <BiLogoInstagramAlt size={30} />
        </motion.a>
        <motion.a
          className=" hover:text-red"
          style={{ padding: "15px", cursor: "pointer" }}
          initial={{ opacity: 0, y: 500 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          animate={
            scrollY > 1800 && scrollY < 2300
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 500 }
          }
          transition={{ delay: 2, duration: 1 }}
        >
          <BiLogoFacebookSquare size={30} />
        </motion.a>
      </motion.div>
    </div>
  );
}
