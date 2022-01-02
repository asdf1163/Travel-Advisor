import "../../../common/SCSS/Offers.scss";
import Box from "./Box";
import { motion } from "framer-motion/dist/framer-motion";

const Offers = ({pageAnimation}) => {

  return (
    <motion.div
      className="list"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box />
    </motion.div>
  );
};

export default Offers;
