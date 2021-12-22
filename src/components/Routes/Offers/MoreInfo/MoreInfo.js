import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../../common/SCSS/MoreInfo.scss";
import UserImages from "./UserImages";
import ChangeSlide from "./ChangeSlide";
import { singleUserActions } from "../../../../common/redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";


const MoreInfo = () => {
  let { offerid } = useParams()
  const dispatch = useDispatch();
  const {fetchSingleUser} = bindActionCreators(singleUserActions, dispatch);
  
  const user = useSelector((state) => state.singleUser.user);
  useEffect(() => {
    fetchSingleUser(offerid)
  }, [offerid])

  const [currentSlide, setCurrentSlide] = useState(0);
  const UserImg = UserImages();

  return (
    <div className="page">
      <div className="left">
        <div className="container">
          <div className="image">
            <img
              key="avatar"
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={`i1
              `}
            />
          </div>
          {user && <div className="fullname">{user.name}</div>}
          <div className="about">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <hr />
      <div className="right">
        <div className="images">{UserImg.map((data) => data)}</div>
        <div className="info">
          <div className="options">
            <button onClick={() => setCurrentSlide(0)}>PRICE</button>
            <button onClick={() => setCurrentSlide(1)}>CONTACT</button>
            <button onClick={() => setCurrentSlide(2)}>OPINIONS</button>
            <button onClick={() => setCurrentSlide(3)}>MAPS</button>
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
  )
};
export default MoreInfo;
