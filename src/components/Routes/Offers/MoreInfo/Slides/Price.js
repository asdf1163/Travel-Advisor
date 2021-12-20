import "../../../../../common/SCSS/Slides.scss";
// import { fetchSingleUser } from "../../../../../common/redux";
import { connect } from "react-redux";
// import { useEffect } from "react";

const Price = ({ singleUserData, fetchSingleUser }) => {
  //    useEffect(() => {
  //     fetchSingleUser();
  //    }, [fetchSingleUser])
  //    console.log(singleUserData)

  return (
    <div className="frontboard">
      <div className="slide">
        <div className="info">
          <div className="destonation">
            <span>SCOTLAND</span>
            <span>2 DAYS</span>
          </div>
          <button>i</button>
        </div>
        <div className="slide_price">
          <div className="activity">Wyjazd w góry</div>
          <div className="price">20.00$</div>
        </div>
        <div className="slide_price">
          <div className="activity">Wyjazd w góry</div>
          <div className="price">20.00$</div>
        </div>
        <div className="slide_price total">
          <span>TOTAL:</span>
          <span>xxx.xx$</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singleUserData: state.singleUser,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSingleUser: () => dispatch(fetchSingleUser()),
//   };
// };

//powinno być jeszcze mapDispatchToProps do nadpisywania stanu, ale bo update'uje niepotrzebnie
export default connect(mapStateToProps)(Price);
