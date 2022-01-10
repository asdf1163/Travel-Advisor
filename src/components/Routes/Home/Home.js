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
    </motion.div>
  );
}

export default Home;
