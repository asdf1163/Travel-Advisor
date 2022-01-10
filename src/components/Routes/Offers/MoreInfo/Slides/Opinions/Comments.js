import StarsRate from "../../../StarsRate";

const Comments = ({comments}) => {
  // const data = [
  //   {
  //     username: "Jan Kowalski",
  //     userimage:
  //       "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
  //     rate: 4.5,
  //     opinion:
  //       "Amazing trip, and landscape is beautiful with these plentiful green and brown colors. I recommend this offer for those who don't know what to do in this lovely winter. It may cost a lot of money but memories are would be your the most unforgettable moments which you have ever experienced.",
  //   },
  //   {
  //     username: "Joanna Nowak",
  //     userimage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  //     rate: 5.0,
  //     opinion:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, dolores dolor enim ab obcaecati ipsa non? Sed, maiores temporibus magnam deserunt atque eligendi, omnis hic dolore cum molestias, illum esse quas voluptates voluptatem magni quaerat adipisci! Ducimus odit dignissimos sapiente.",
  //   },
  //   {
  //     username: "Michał Nowak",
  //     userimage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  //     rate: 4,
  //     opinion:
  //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, dolores dolor enim ab obcaecati ipsa non? Sed, maiores temporibus magnam deserunt atque eligendi, omnis hic dolore cum molestias, illum esse quas voluptates voluptatem magni quaerat adipisci! Ducimus odit dignissimos sapiente.",
  //   },
  // ];

  return comments.map((data, index) => (
    <div className="review" key={`opinion${index}`}>
      <div className="userInfo">
        <img src={data.userImage} alt={`userimg${index}`} />
        <div className="data">
          <div className="fullname">{data.name}</div>
          <div className="rate">
            <StarsRate numOfStars={data.rate} />
          </div>
        </div>
      </div>
      <div className="comment">{data.opinion}</div>
    </div>
  ));
};

export default Comments;
