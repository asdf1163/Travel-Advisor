import { useSelector } from "react-redux";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { BiWorld, BiEnvelope, BiPhone } from "react-icons/bi";

const Contact = () => {
  const infoUser = useSelector((state) => state.singleUser.user);
  return (
    <div className="frontboard">
      <div className="contact">
        <div className="contact_left">
          <div className="contact_activity">
            <BiWorld size={'2rem'} />{" "}
          </div>
          <div className="contact_value">{infoUser.website}</div>
        </div>
        <div className="contact_left">
          <div className="contact_activity">
            <BiEnvelope size={'2rem'}/>{" "}
          </div>
          <div className="contact_value">{infoUser.email}</div>
        </div>
        <div className="contact_left">
          <div className="contact_activity">
            <BiPhone size={'2rem'} />{" "}
          </div>
          <div className="contact_value">{infoUser.phone}</div>
        </div>
        <div className="contact_space_around">
            <BsFacebook />
            <BsInstagram />
            <BsSnapchat />
            <BsTwitter />
        </div>
        <div className="message">
          <textarea placeholder="Do you have a question? Go ahead 😄" />
          <input type="submit" value="W" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
