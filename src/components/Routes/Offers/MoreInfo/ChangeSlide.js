import Price from "./Slides/Price";
import Contact from "./Slides/Contact";
import Opinions from "./Slides/Opinions/Opinions";
import Maps from "./Slides/Maps";

const ChangeSlide = ({ curCat, userAPI }) => {
  const animationSlide = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    exit: {
      x: -200,
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 2,
      },
    },
  };

  const data = [
    {
      category: "Price",
      slide: <Price animationSlide={animationSlide} userAPI={userAPI.price} />,
    },
    {
      category: "Contact",
      slide: <Contact animationSlide={animationSlide} userAPI={userAPI.contact} />,
    },
    {
      category: "Opinions",
      slide: <Opinions animationSlide={animationSlide} userAPI={userAPI.opinions} />,
    },
    {
      category: "Maps",
      slide: <Maps animationSlide={animationSlide} />,
    },
  ];
  return data[curCat].slide;
};

export default ChangeSlide;
