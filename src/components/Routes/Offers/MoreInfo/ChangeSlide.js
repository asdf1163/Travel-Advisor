import Price from "./Slides/Price";
import Contact from "./Slides/Contact";
import Opinions from "./Slides/Opinions";
import Maps from "./Slides/Maps";

const ChangeSlide = ({ curCat }) => {
    
    const data = [
    {
      category: "Price",
      slide: <Price />,
    },
    {
      category: "Contact",
      slide: <Contact />,
    },
    {
      category: "Opinions",
      slide: <Opinions />,
    },
    {
      category: "Maps",
      slide: <Maps />,
    },
  ];
  return data[curCat].slide;
};

export default ChangeSlide;
