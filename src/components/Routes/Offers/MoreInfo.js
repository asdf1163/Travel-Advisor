// import { useEffect, useState } from "react";
// import { getUsers } from "../../../common/APIs/recipesApi";
// import { useParams } from "react-router-dom";
import '../../../common/SCSS/MoreInfo.scss'
const MoreInfo = () => {
  // let { offerid } = useParams();
  // const [userData, setUserData] = useState()

  // const fetchUser = () => {
  //   getUsers(offerid)
  //     .then((respond) => {
  //       // console.log(respond.data)
  //       setUserData(respond.data)
  //       return respond;
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //       return error;
  //     });
  // };

  // useEffect(() => {
  //     fetchUser()
  // }, [offerid]);

//   console.log(userData);

  return (
    <div className="page">
      {/* tak {offerid} */}
      {/* {userData.username} */}
      {/* {userData.id} */}
      <div className='left'>
        <div className='container'>
          <div className='image'>
          <img
              src={"https://cdn-icons-png.flaticon.com/512/147/147144.png"}
              alt={`i1
              `}
            />
          </div>
          <div className='fullname'>
            Joe Doe
          </div>
          <div className='about'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <div className='right'>
          <div className='images'><img
              src={"https://picsum.photos/350/170"}
              alt={`i1
              `}
            /><img
            src={"https://picsum.photos/350/170"}
            alt={`i2
            `}
          /><img
          src={"https://picsum.photos/350/170"}
          alt={`i3
          `}
        /></div>
          <div className='info'>
            <div className='options'>
              <button>PRICE</button>
              <button>CONTACT</button>
              <button>OPINIONS</button>
              <button>MAPS</button>
            </div>
            <div className='content'>
                <div className='frontboard'>
                  <div className="price-slide">
                    <div class="activity">Lorem</div>
                    <div class="price">20.00$</div>
                  </div>
                </div>
                <div className='backboard'>maps</div>
            </div>
          </div>
      </div>

    </div>
  );
};

export default MoreInfo;
