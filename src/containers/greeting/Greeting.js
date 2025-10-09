import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={"https://drive.google.com/file/d/13ESIHFis7JsMyHPl9ZCDtn97LTncl9_N/view?usp=sharing"}
                    // download="Venkat_Nikhil_Resume.pdf"
                    target="_blank"
                    className="download-link-button"
                    rel="noopener noreferrer"
                  >
                    <Button text="My resume" />
                  </a>
                )}
              </div>
              <div className="open-to-work-tag">
                 Open to Full-Time roles in the U.S
              </div>
              
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
          <div className="headshot-wrapper">
                <img
                  src={require("../../assets/images/myImages/headshot3.jpeg")} // move this image here
                  alt="Venkat Nikhil"
                  className="animated-headshot"
                />
            </div>
        </div>
      </div>
    </Fade>
  );
}
