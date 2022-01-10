import React from "react";
import "./common/SCSS/Main.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./common/redux/store";
import Header from "./components/Header/Header";
import Home from "./components/Routes/Home/Home";
import Offers from "./components/Routes/Offers/Offers";
import PageNotFound from "./components/Routes/PageNotFound/PageNotFound";
import MoreInfo from "./components/Routes/Offers/MoreInfo/MoreInfo";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import About from "./components/Routes/About/About";

function App() {
  const location = useLocation();

  const pageAnimation = {
    hidden: {
      opacity: 0,
      x:0
    },
    visible: {
      opacity: 1,
      x:0,
      transition: { deley: 0.3, duration: 0.5 }
    },
    exit: {
      x: "-110vw",
      transition: { ease: "easeInOut", duration: 0.8 }
    },
    exitReverse: {
      x: "110vw",
      transition: { ease: "easeInOut", duration: 0.8 },
      position: "fixed",
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" index element={<Home pageAnimation={pageAnimation}/>} />
            <Route path="/offers" element={<Offers pageAnimation={pageAnimation}/>} />
            <Route path="/offers/:offerid" element={<MoreInfo pageAnimation={pageAnimation}/>} />
            <Route path="/about" element={<About pageAnimation={pageAnimation}/>} />
            <Route path="/404" element={<PageNotFound pageAnimation={pageAnimation}/>} />
            <Route path="*" element={<PageNotFound pageAnimation={pageAnimation}/>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Provider>
  );
}

export default App;
