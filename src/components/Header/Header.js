import "../../common/SCSS/Header.scss";
import MenuMobile from "./MenuMobile";
import { Link, Outlet } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

const Header = () => {
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  return (
    <>
      {useWindowSize() > 950 ? (
        <div className="header">
          <Link className="btn" to="/">
            <div className="btn__logo">LOGO</div>
          </Link>
          <Link className="btn" to="main">
            <span className="btn__options">Main</span>
          </Link>
          <Link className="btn" to="offers">
            <span className="btn__options">Offers</span>
          </Link>
          <Link className="btn" to="about">
            <span className="btn__options">About</span>
          </Link>
          <Outlet />
        </div>
      ) : (
        <MenuMobile />
      )}
    </>
  );
};

export default Header;
