import "../../../../../common/SCSS/Slides.scss";
// import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { BsInfoLg } from "react-icons/bs";

const Price = ({ animationSlide, userAPI }) => {
  // const infoUser = useSelector((state) => state.singleUser.user);
  return (
    <AnimatePresence>
      <motion.div
        className="price"
        variants={animationSlide}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="info">
          <div className="destonation">
            <span>{userAPI.destination}</span>
            <span>{userAPI.duration}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => alert("not working yet")}
          >
            <BsInfoLg size={20} />
          </motion.button>
        </div>
        <div className="attraction">
          {userAPI.attractions.map((data) => (
            <div className="attraction_space_between">
              <div className="activity">{data.info}</div>
              <div className="value">{data.price}$</div>
            </div>
          ))}
        </div>
        <div className="attraction_space_between total">
          <span>TOTAL:</span>
          <span>xxx.xx$</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Price;
