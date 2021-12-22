import Price from "./Slides/Price";
import Contact from "./Slides/Contact";
import Opinions from "./Slides/Opinions";
import Maps from "./Slides/Maps";

const ChangeSlide = ({ curCat, userData }) => {
    const data = [
    {
      category: "Price",
      slide: <Price userData={userData}/>
    },
    {
      category: "Contact",
      slide: <Contact userData={userData}/>
    },
    {
      category: "Opinions",
      slide: <Opinions userData={userData}/>
    },
    {
      category: "Maps",
      slide: <Maps userData={userData}/>
    },
  ];
  return data[curCat].slide;
};

export default ChangeSlide;
