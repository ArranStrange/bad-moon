import React, { useState } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import { motion } from "framer-motion";
import PopUps from "./assets/photos/Pop ups.png";
import Festivals from "./assets/photos/Festivals.jpg";
import Weddings from "./assets/photos/Weddings.png";
import ImageCycle from "./hooks/ImageCycle";
import RedRay from "./assets/design-assets/SunRay-Red.png";
import BlackRay from "./assets/design-assets/SunRay-Black.png";
import WhiteRay from "./assets/design-assets/SunRay-white.png";

type ContentType = "POP-UPS" | "FESTIVALS" | "WEDDINGS"; // Define type for valid content types

interface ContentItem {
  text: string;
  imagePath: string;
}
const images = [BlackRay, WhiteRay, RedRay];

export default function About2() {
  const scrollY = useScrollPosition();
  const [activeContent, setActiveContent] = useState<ContentType | null>(null); // Explicitly defining type as ContentType

  const handleH6Click = (content: ContentType) => {
    // Explicitly defining type as ContentType
    setActiveContent(content);
  };

  const contentMap: Record<ContentType, ContentItem> = {
    // Defining contentMap with ContentType keys
    "POP-UPS": {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatem provident delectus, odio temporibus non cumque autem dicta facilis corrupti impedit recusandae quam similique iure accusamus consectetur laboriosam facere! Possimus.",
      imagePath: PopUps,
    },
    FESTIVALS: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum inventore repellat praesentium quam. Et temporibus architecto consequatur nam sed minus aut, repellat, velit doloribus saepe id quam fuga alias.",
      imagePath: Festivals,
    },
    WEDDINGS: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed tempora facere voluptatum ducimus vero, quia quidem eos illum. Consequatur sit reiciendis blanditiis mollitia commodi, asperiores vero qui laboriosam nulla.",
      imagePath: Weddings,
    },
  };

  return (
    <div className="flex flex-col h-screen justify-start items-center overflow-hidden">
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
        animate={
          scrollY > 1000 && scrollY < 1500
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.1, y: 100 }
        }
        transition={{ delay: 1, duration: 1 }}
        style={{ width: "200px", height: "200px" }}
        className="flex justify-center items-end"
      >
        <ImageCycle images={images} />
      </motion.div>
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          scrollY > 900 && scrollY < 1800 ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 1 }}
        className="text-start flex flex-row"
      >
        <motion.h6
          initial={{ opacity: 0, y: 400 }} // Enter from the bottom
          animate={
            scrollY > 1000 && scrollY < 1500
              ? { opacity: 1, y: 0 } // Show when condition met
              : { opacity: 0, y: -400 } // Leave to the top
          }
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleH6Click("POP-UPS")}
          className="mr-5 hover:text-red"
          style={{ cursor: "pointer" }}
        >
          POP-UPS
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 400 }}
          animate={
            scrollY > 1000 && scrollY < 1500
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -400 }
          }
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleH6Click("FESTIVALS")}
          className="mr-5 hover:text-red"
          style={{ cursor: "pointer" }}
        >
          FESTIVALS
        </motion.h6>
        <motion.h6
          initial={{ opacity: 0, y: 400 }}
          animate={
            scrollY > 1000 && scrollY < 1500
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -400 }
          }
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleH6Click("WEDDINGS")}
          className=" hover:text-red"
          style={{ cursor: "pointer" }}
        >
          WEDDINGS
        </motion.h6>
      </motion.div>
      {/* Render corresponding <p> and image based on active content */}
      {activeContent && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={
            scrollY > 1000 && scrollY < 1400
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 0 }
          }
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center w-1/2 h-1/4"
        >
          <div className="grid grid-cols-4">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: -1000 }}
              whileHover={{ scale: 1.05 }}
              className="col-span-1 flex justify-end items-end pr-2"
            >
              <img
                src={contentMap[activeContent].imagePath}
                alt={activeContent}
                className="h-[150px] w-[150px] rounded-l-full"
              />
            </motion.div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: 1000 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-start items-center h-full text-left col-span-3"
            >
              <p>{contentMap[activeContent].text}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
