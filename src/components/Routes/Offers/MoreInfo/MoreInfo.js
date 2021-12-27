import { useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../../../../common/SCSS/MoreInfo.scss";
import "../../../../common/SCSS/abstracts/_media_query.scss";
import UserImages from "./UserImages";
import ChangeSlide from "./ChangeSlide";
import { singleUserActions } from "../../../../common/redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const MoreInfo = () => {
  let { offerid } = useParams();
  const dispatch = useDispatch();
  const { fetchSingleUser } = bindActionCreators(singleUserActions, dispatch);

  const [sizeChange, setSizeChange] = useState(0);
  const refWidthImages = useRef(0);
  const sizeImageContainer = refWidthImages.current.offsetWidth;
  const amountOfImages = 3;
  const change = sizeImageContainer / amountOfImages;

  const user = useSelector((state) => state.singleUser.user);
  useLayoutEffect(() => {
    fetchSingleUser(offerid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerid]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const UserImg = UserImages();
  // console.log(sizeImageContainer)

  const positionImages = (value) => {
    // if (value === 1) setSizeChange((state) => state + change);
    // else setSizeChange((state) => state - change);

    var cleft = 100;
    var ctop = 100;
    var ctrans = 'translate('+cleft+'px, '+ctop+'px)';
    var css = {
	 transform: ctrans 
    }

    console.log(css);
    return css
    // refWidthImages.current.style.transform = `translateX(-${sizeChange.current}px)`;
  };
  // const tranlateX = "82";
  // const translateIMG = `transform = translateX(${tranlateX}%)`;

  return (
    <div className="page">
      <div className="left">
        <div className="container">
          <div className="image">
            <img
              key="avatar"
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={"i1"}
            />
          </div>
          {user && <div className="fullname">{user.name}</div>}
          <div className="about">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised.
          </div>
        </div>
      </div>
      <hr />
      <div className="right">
        <div className="images">
          <div className="images__previmg" onClick={() => positionImages(0)}>
            <BsArrowLeftShort size={60} />
          </div>
          <div className="images__container" style={{ translateX: "-50%" }}>
            {UserImg.map((data) => data)}
          </div>
          <div className="images__nextimg" onClick={() => positionImages(1)}>
            {/* <div className="images__nextimg" onClick={() => console.log(sizeImageContainer)}> */}
            {/* <div className="images__nextimg" onClick={() => console.log(refWidthImages.current.style.transform="translateX('20px')")}> */}
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
                onClick={() => console.log(refWidthImages.current.offsetWidth)}
              >
                {" "}
                TEST{" "}
              </button>
            </div>
          </div>
          <div className="content">
            <ChangeSlide curCat={currentSlide} userData={user} />
            <div className="backboard">
              <img
                src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9ec9b5babce63530d2abe1_dark_map%402x.jpg"
                alt="maps"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
