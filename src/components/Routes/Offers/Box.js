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
              src={users.imgUser}
              alt={`i${users.id}`}
            />
          </div>
          <div className="name">{users.name}</div>
          <div className="stars">
            <StarsRate numOfStars={users.rate} keyUser={users.id} />
          </div>
        </div>
        <div className="column_right">
          <div className="info">
            <div className="country">{users.destination}</div>
            <div className="duration">{users.duration}</div>
          </div>
          <div className="info2">
            <div className="price">TOTAL: {users.total + users.currency}</div>
            <Link params={{ offerid: users.id }} to={`${users.id}`}>
              <button>
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Box);
