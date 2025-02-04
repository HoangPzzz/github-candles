import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/basketball_0.png";
import hero_image_back from "../../assets/green-2075575_960_720-removebg-preview.png";
import Heart from "../../assets/heart-solid.svg";
import Calories from "../../assets/fire-solid (2).svg";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';
const Hero = () => {
  const transition = { type: "tween", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              ideal body in here we will help you to shape and build your ideal
              body and live up your life to fullest
            </span>
          </div>
          {/* figures */}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} delay="4" preFix="+"/>
              </span>
              <span>expert coachs</span>
            </div>
            <div>
              <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+"/>

              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
              <NumberCounter end={50} start={30} delay="4" preFix="+"/>

              </span>
              <span>fitness programs</span>
            </div>
          </div>
          {/* hero buttons */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images */}
        <motion.img
          initial={{ right: "1rem" }}
          whileInView={{ right: "13rem" }}
          transition={transition}
          src={hero_image}
          alt=""
          className="hero-image"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "23rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "35rem" }}
          whileInView={{ right: "45rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
