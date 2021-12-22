import "../../../../../common/SCSS/Slides.scss";
import { useSelector } from "react-redux";

const Price = () => {
  const infoUser = useSelector((state) => state.singleUser.user);

  return (
    <div className="frontboard">
      <div className="price">
        <div className="info">
          <div className="destonation">
            <span>SCOTLAND</span>
            <span>2 DAYS</span>
          </div>
          <button>i</button>
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
      </div>
    </div>
  );
};

export default Price;
