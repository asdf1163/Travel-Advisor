import "../../../common/SCSS/AboutUs.scss";
import { motion } from "framer-motion/dist/framer-motion";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

export default function About({ pageAnimation }) {
  const iconSize = "35px";
  const submitAnimation = {
    hover: {
      rotate: 45,
      backgroundColor: "#002828"
    },
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exitReverse"
      className="aboutus"
    >
      <div className="slide">
        <div className="slide__center">
          <div className="column__left">
            <h2 className="title">LOGO, our vision ...</h2>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              illum impedit corrupti autem doloremque laudantium voluptas
              dolore, tenetur esse, maxime soluta voluptatum dignissimos
              inventore doloribus necessitatibus, quisquam vero dolor ipsa at
              accusantium delectus quaerat. Velit dolor ipsum atque asperiores
              autem!
            </div>
          </div>
          <div className="column__right">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt="i1"
            />
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide__center">
          <div className="column__right">
            <img
              src="https://images.unsplash.com/photo-1567721415494-22da70ae7dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80"
              alt="i1"
            />
          </div>
          <div className="column__left">
            <div className="achievement">
              <span className="description">
                <h2 className="title">Achievements reached in 2021</h2>
                <li>Gain over 10k active users</li>
                <li>Over 100k published offers only in 2021</li>
                <li>60% lorem ipsum</li>
                <h2 className="title">Goals for 2022</h2>
                <li> Geather at least 2x active users</li>
                <li> Embed and publish new feature to application</li>
                <li> 60% lorem ipsum</li>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide__center">
          <div className="column__left">
            <p className="title">Follow us on Social Media</p>
            <div className="icons">
              <BsFacebook size={iconSize} />
              <BsTwitter size={iconSize} />
              <BsInstagram size={iconSize} />
              <BsLinkedin size={iconSize} />
            </div>
          </div>
          <div className="column__right">
            <p className="title">Do you have a question?</p>
            <input type="text" maxLength={30} placeholder="e-mail" />
            <textarea placeholder="message" />
            <motion.button
              type="submit"
              variants={submitAnimation}
              whileHover="hover"
            >
              {<IoIosSend size={iconSize} />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
