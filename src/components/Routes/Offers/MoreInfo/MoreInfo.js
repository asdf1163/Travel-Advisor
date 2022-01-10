import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../../common/SCSS/MoreInfo.scss";
import "../../../../common/SCSS/abstracts/_media_query.scss";
import UserImages from "./UserImages";
import ChangeSlide from "./ChangeSlide";
import { singleUserActions } from "../../../../common/redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion/dist/framer-motion";

const MoreInfo = ({ pageAnimation }) => {
  let { offerid } = useParams();

  const dispatch = useDispatch();
  const { fetchSingleUser } = bindActionCreators(singleUserActions, dispatch);
  const [sizeChange, setSizeChange] = useState(0);
  const currentImage = useRef(0);
  const refWidthImages = useRef(0);

  const user = useSelector((state) => state.singleUser.user);
  useEffect(() => {
    fetchSingleUser(offerid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerid]);
  console.log(user);

  const redirect = () => {
    if (user.length !== 0) return true;
    else return false;
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  if (currentSlide === 3) {
    // frontslide - display: none;
    // rozszerz widok mapy
  }

  const UserImg = UserImages();

  const slideImageContainer = (eventName) => {
    if (eventName === 1) {
      setSizeChange((state) => state + 100);
      currentImage.current -= 1;
      console.log(`usunąć, ${currentImage.current}`);
    } else {
      setSizeChange(sizeChange - 100);
      currentImage.current += 1;
      console.log(`dodac, ${currentImage.current}`);
    }
  };

  return (
    redirect() && (
      <motion.div
        className="page"
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        exit="exitReverse"
      >
        <div className="left">
          <div className="container">
            <div className="image">
              <img
                key="avatar"
                src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
                alt={`i${user.id}`}
              />
            </div>
            {user && <div className="fullname">{user.name}</div>}
            <div className="about">
              {user.description}
            </div>
          </div>
        </div>
        <hr />
        <div className="right">
          <div className="images">
            {sizeChange < 0 && (
              <div
                className="images__previmg"
                onClick={() => slideImageContainer(1)}
              >
                <BsArrowLeftShort size={60} />
              </div>
            )}
            <motion.div
              className="images__container"
              ref={refWidthImages}
              initial={{
                x: "0%",
              }}
              animate={{
                x: `${sizeChange}%`,
                transition: { ease: "easyOut", duration: 0.6 },
              }}
            >
              {UserImg.map((data) => data)}
            </motion.div>
            <div
              className="images__nextimg"
              onClick={() => slideImageContainer(0)}
            >
              <BsArrowRightShort size={60} />
            </div>
          </div>
          <div className="info">
            <div className="options">
              <div className="options_container">
                <button onClick={() => setCurrentSlide(0)}>PRICE</button>
                <button onClick={() => setCurrentSlide(1)}>CONTACT</button>
                <button onClick={() => setCurrentSlide(2)}>OPINIONS</button>
                <button onClick={() => setCurrentSlide(3)}>MAPS</button>
                <button
                  onClick={() =>
                    console.log(refWidthImages.current.offsetWidth)
                  }
                >
                  {" "}
                  TEST{" "}
                </button>
              </div>
            </div>
            <div className="content">
              {/* {currentSlide !== 3 ? ( */}
                <>
                  <div className="frontboard">
                    <ChangeSlide curCat={currentSlide} userAPI={user}/>
                  </div>
                  <div className="backboard">
                    <img
                      src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9ec9b5babce63530d2abe1_dark_map%402x.jpg"
                      alt="maps"
                    />
                  </div>
                </>
              {/* ) : ( */}
                {/* <>
                  <div className="frontboard">
                    <ChangeSlide curCat={currentSlide} />
                  </div>
                  <div className="backboard">
                    <img
                      src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9ec9b5babce63530d2abe1_dark_map%402x.jpg"
                      alt="maps"
                    />
                  </div>
                </> */}
              {/* )} */}
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};
export default MoreInfo;
