import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

function Home({pageAnimation}) {

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Home page :)
      <li>Zrobić API</li>
      <li>Wprowadzić animacje</li>
      <li>Wprowadzić API do mapy</li>
      <li>Dodać resztę stron</li>
    </motion.div>
  );
}

export default Home;
