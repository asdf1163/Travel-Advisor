import StarsRate from "../../StarsRate";

const Opinions = () => {
  return (
    <div className="frontboard">
      <div className="opinion">
        <div className="opinion_space_between">
          <div className="rate">
            <div className="overall">4.5/5</div>
            <div className="ratings">372 ratings</div>
          </div>
          <button>READ MORE</button>
        </div>
        <div className="container">
          <div className="review">
            <div className="userInfo">
                <img
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80"
                  alt="test1"
                />
              <div className="data">
                <div className="fullname">Jan Kowalksi</div>
                <div className="rate"><StarsRate numOfStars={4.5}/></div>
              </div>
            </div>
            <div className="comment">
              Amazing trip, and landscape is plentiful in green and brown
              colors. I recommend this offer for those who don't know what to in this lovely winter and go for this amazing trip which may cost a lot but if you don't mind to spend that amount of money just try it.
            </div>
          </div>
        </div>
          <div className="dotts">
            <span className="dott_current" />
            <span className="dott" />
            <span className="dott" />
          </div>
        {/* dotts */}
      </div>
    </div>
  );
};

export default Opinions;
