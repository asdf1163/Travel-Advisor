import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const StarsRate = ({ numOfStars }) => {

    const CountStars = (numOfStars) => {
        let array =[];
        for (var length = 5; length !== 0; length--) {
            if (numOfStars > 0.5) {
                array.push(<IoStar />)
                numOfStars = numOfStars - 1;
            }
            else if (numOfStars === 0.5) {
                array.push(<IoStarHalfOutline />)
                numOfStars = numOfStars - 0.5;
            }
            else array.push(<IoStarOutline />)
        }
        return array;
    }

    return (
        <>
            {CountStars(numOfStars)}
        </>
    )
}

export default StarsRate