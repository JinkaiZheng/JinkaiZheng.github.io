import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";
import {greeting, greeting_en} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark, isEn} = useContext(StyleContext);
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
                {isEn ? greeting_en.title : greeting.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {isEn ? greeting_en.subTitle1 : greeting.subTitle1}
                <br />
                {isEn ? greeting_en.subTitle2 : greeting.subTitle2}
              </p>
              {/* <div id="resume" className="empty-div"></div> */}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p subtext"
                    : "greeting-text-p subtext"
                }
              >
                <div>
                  {isEn ? greeting_en.subtext1 : greeting.subtext1}
                  <br />
                  <span className="bold-text"> {/* 加粗容器 */}
                    {isEn ? greeting_en.subtext2 : greeting.subtext2}
                  </span>
                  <span className="wave-emoji">{emoji("👋")}</span>
                </div>
              </p>
              <div className="greeting-contact-div">
                {/* <Button
                  text="Contact me"
                  className="button-greeting-contact"
                  href="#contact"
                /> */}
                {/* {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )} */}
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="person"
              src={require("../../assets/images/zjk1.jpg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
