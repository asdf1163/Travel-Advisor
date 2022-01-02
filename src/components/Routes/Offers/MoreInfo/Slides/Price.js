import "../../../../../common/SCSS/Slides.scss";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { BsInfoLg } from "react-icons/bs";


const Price = ({ animationSlide }) => {
  const infoUser = useSelector((state) => state.singleUser.user);
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
            <span>SCOTLAND</span>
            <span>2 DAYS</span>
          </div>
          <motion.button whileHover={{ scale: 1.1 }}><BsInfoLg size={20}/></motion.button>
        </div>
        <div className="attraction">
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">Wyjazd w góry</div>
            <div className="value">20.00$</div>
          </div>
          <div className="attraction_space_between">
            <div className="activity">{infoUser.email}</div>
            <div className="value">20.00$</div>
          </div>
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
