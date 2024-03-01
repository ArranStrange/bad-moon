import UseScrollPosition from "../hooks/useScrollPosition";
import { motion } from "framer-motion";

export default function About3() {
  const scrollY = UseScrollPosition();

  return (
    <div className="flex flex-col h-screen justify-center items-center overflow-hidden"></div>
  );
}
