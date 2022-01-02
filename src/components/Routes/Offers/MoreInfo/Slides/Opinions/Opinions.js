import { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Comments from "./Comments";

const Opinions = ({ animationSlide }) => {
  const [changeTranslateX, setChangeTranslateX] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeTranslateX < -100
        ? setChangeTranslateX(0)
        : setChangeTranslateX(changeTranslateX - 100);
    }, 15000);
    return () => {
      clearTimeout(timer)
    }
  }, [changeTranslateX])

  return (
    <motion.div
      className="opinion"
      variants={animationSlide}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="opinion_space_between">
        <div className="rate">
          <div className="overall">4.5/5</div>
          <div className="ratings">372 ratings</div>
        </div>
        <motion.button whileHover={{ scale: 1.1 }}>READ MORE</motion.button>
      </div>
      <div style={{overflow: 'hidden'}}>
        <motion.div
          className="container"
          initial={{ x: 0 }}
          animate={{
            x: `${changeTranslateX}%`,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Comments />
        </motion.div>
      </div>
      <div className="dotts">
        <span
          className={changeTranslateX === 0 ? "dott_current" : "dott"}
          onClick={() => setChangeTranslateX(0)}
        />
        <span
          className={changeTranslateX === -100 ? "dott_current" : "dott"}
          onClick={() => setChangeTranslateX(-100)}
        />
        <span
          className={changeTranslateX === -200 ? "dott_current" : "dott"}
          onClick={() => setChangeTranslateX(-200)}
        />
      </div>
    </motion.div>
  );
};

export default Opinions;
