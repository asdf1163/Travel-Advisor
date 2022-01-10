// import { useSelector } from "react-redux";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { BiWorld, BiEnvelope, BiPhone } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const Contact = ({ animationSlide, userAPI}) => {
  // const infoUser = useSelector((state) => state.singleUser.user);
  return (
    <AnimatePresence>
      <motion.div
        className="contact"
        variants={animationSlide}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="contact_left">
          <div className="contact_activity">
            <BiWorld size={"2rem"} />{" "}
          </div>
          <div className="contact_value">{userAPI.website}</div>
        </div>
        <div className="contact_left">
          <div className="contact_activity">
            <BiEnvelope size={"2rem"} />{" "}
          </div>
          <div className="contact_value">{userAPI.email}</div>
        </div>
        <div className="contact_left">
          <div className="contact_activity">
            <BiPhone size={"2rem"} />{" "}
          </div>
          <div className="contact_value">{userAPI.phoneNumber}</div>
        </div>
        <div className="contact_space_around">
          <a href={`https://facebook.com/${userAPI.socialMedia.facebook}`} ><BsFacebook /></a>
          <a href={`https://instagram.com/${userAPI.socialMedia.instagram}`} ><BsInstagram /></a>
          <a href={`https://snapchat.com/${userAPI.socialMedia.snapchat}`} ><BsSnapchat /></a>
          <a href={`https://twitter.com/${userAPI.socialMedia.twitter}`} ><BsTwitter /></a>
        </div>
        <div className="message">
          <textarea placeholder="Do you have a question? Go ahead 😄" />
          <input type="submit" value="W" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
