import { useState, useEffect } from "react";
// import { getUsers } from "../../../../common/APIs/recipesApi";
import { useParams } from "react-router-dom";
import "../../../../common/SCSS/MoreInfo.scss";
import UserImages from "./UserImages";
import ChangeSlide from "./ChangeSlide";
import { fetchSingleUser } from "../../../../common/redux";
import { connect } from "react-redux";

const UserID = () => {
  let { offerid } = useParams();
  return offerid;
};

const MoreInfo = ({ singleUser, fetchSingleUser }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const UserImg = UserImages();

  useEffect(() => {
    fetchSingleUser();
  }, [fetchSingleUser]);

  return (
    <div className="page">
      <div className="left">
        <div className="container">
          <div className="image">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={`i1
              `}
            />
          </div>
          {singleUser && <div className="fullname">{singleUser.name}</div>}
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
            <ChangeSlide curCat={currentSlide} userData={singleUser} />
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

const mapStateToProps = (state) => {
  return {
    singleUser: state.singleUser.user,
  };
};
const mapDispatchToProps = (dispatch, userID = UserID()) => {
  console.log(userID);
  return {
    fetchSingleUser: () => dispatch(fetchSingleUser(userID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);
