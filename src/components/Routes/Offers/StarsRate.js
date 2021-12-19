import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const StarsRate = ({ numOfStars, keyUser }) => {
    const starId = 0
  const CountStars = (numOfStars, IDstar) => {
    let array = [];
    for (var length = 5; length !== 0; length--) {
      if (numOfStars > 0.5) {
        array.push(<IoStar key={`fStar${IDstar}`} />);
        numOfStars = numOfStars - 1;
      } else if (numOfStars === 0.5) {
        array.push(<IoStarHalfOutline key={`hStar${IDstar}`} />);
        numOfStars = numOfStars - 0.5;
      } else array.push(<IoStarOutline key={`oStar${IDstar}`} />);
      IDstar++
    }
    return array;
  };

  return (
    <>
      <span key={keyUser}>{CountStars(numOfStars, starId)}</span>
    </>
  );
};

export default StarsRate;
