import "../../../common/SCSS/Box.scss";
import StarsRate from "./StarsRate";
import { connect } from "react-redux";
import { fetchUsers } from "../../../common/redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Box = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    userData.users.map((users) => (
      <div className="offert" key={`off${users.id}`}>
        <div className="column_left">
          <div className="image">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={`i${users.id}`}
            />
          </div>
          <div className="name">{users.name}</div>
          <div className="stars">
            <StarsRate numOfStars={3.5} keyUser={users.id} />
          </div>
        </div>
        <div className="column_right">
          <div className="info">
            <div className="country">Scotland</div>
            <div className="duration">4 days</div>
          </div>
          <div className="info2">
            <div className="price">TOTAL: 36.99$</div>
            <Link params={{ offerid: users.id }} to={`${users.id}`}>
              <button>Read more</button>
            </Link>
          </div>
        </div>
      </div>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Box);
