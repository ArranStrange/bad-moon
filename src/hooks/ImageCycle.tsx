import React, { useState, useEffect, useRef } from "react";

const ImageCycle: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const intervalRef = useRef<number>();

  useEffect(() => {
    setCurrentIndex(0);

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        return newIndex >= images.length ? 0 : newIndex;
      });
    }, 1000);

    return () => window.clearInterval(intervalRef.current);
  }, [images]);

  return (
    <div>
      {images.map((image, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            display: index === currentIndex ? "block" : "none",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
};

export default ImageCycle;
