import { motion } from "framer-motion";
import UseScrollPosition from "../hooks/useScrollPosition";
import ImageCycle from "../hooks/ImageCycle";
import BlackCactus from "../assets/design-assets/CACTUS-BLACK.png";
import RedCactus from "../assets/design-assets/CACTUS-RED.png";
import WhiteCactus from "../assets/design-assets/CACTUS-WHITE.png";

const images = [BlackCactus, WhiteCactus, RedCactus];

export default function About1() {
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
          scrollY > 350 && scrollY < 900
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -200 }
        }
        transition={{ duration: 1 }}
        style={{ width: "150px", height: "150px" }}
        className="mb-10"
      >
        <ImageCycle images={images} />
      </motion.div>
      <motion.p
        className="text-3xl font-bold"
        variants={containerVariants}
        initial="hidden"
        animate={scrollY > 400 && scrollY < 900 ? "visible" : "hidden"} // Trigger animation when scrollY is between 500 and 700
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        {"AUTHENTIC QUESABIRRIA".split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 400 }}
        animate={
          scrollY > 350 && scrollY < 900
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 400 }
        }
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        based in Wales & the South West
      </motion.p>
    </div>
  );
}
