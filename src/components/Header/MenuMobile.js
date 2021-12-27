import { Link } from "react-router-dom";
import { HiMenu, HiX, HiOutlineUserCircle, HiOutlineCog } from "react-icons/hi";
import { useState } from "react";

const MenuMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const buttonSize = 30;
  return (
    <div className={displayMenu ? "header--opened" : "header--closed"}>
      <div
        className="header_m"
        style={displayMenu ? { minHeight: "100vh" } : { height: "10vh" }}
      >
        <div className="header">
          <div className="header__possition">
            <Link to="/">
              <div className="btn__logo" onClick={() => setDisplayMenu(false)}>
                LOGO
              </div>
            </Link>
            {displayMenu ? (
              <span
                // className="btn__options"
                onClick={() => setDisplayMenu(false)}
              >
                <HiX color={"white"} size={buttonSize} />
              </span>
            ) : (
              <span
                // className="btn__options"
                onClick={() => setDisplayMenu(true)}
              >
                <HiMenu color={"white"} size={buttonSize} />
              </span>
            )}
          </div>
        </div>
        {displayMenu && (
          <>
            <div className="header__list">
              <div className="options">
                <Link className="btn" to="main">
                  <li onClick={() => setDisplayMenu(false)}>MAIN</li>
                </Link>
                <Link className="btn" to="offers">
                  <li onClick={() => setDisplayMenu(false)}>OFFERTS</li>
                </Link>
                <Link className="btn" to="about">
                  <li onClick={() => setDisplayMenu(false)}>ABOUT</li>
                </Link>
              </div>
            </div>
            <div className="header__bottom">
              <p>
                <HiOutlineCog size={buttonSize+20}/>
              </p>
              <p>
                <i style={{color: 'gray'}}>{`<-AVAILABLE SOON->`}</i>
              </p>
              <p>
                <HiOutlineUserCircle size={buttonSize+20}/>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuMobile;
