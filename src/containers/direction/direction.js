import React, { useContext } from "react";
import "./direction.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { directionContent } from "../../portfolio";

export default function Direction() {
  const { isDark, isEn } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="direction">
      <div className="direction-main-div">
        <Fade left duration={1000}>
          <div className="direction-image-div">
            <img
              alt="Gait Recognition"
              src={require("../../assets/images/gait.png")}
              className="direction-image"
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="direction-text-div">
            <h1 className={isDark ? "dark-mode direction-heading" : "direction-heading"}>
              {isEn ? directionContent.title.en : directionContent.title.zh}
            </h1>
            <p className={isDark ? "dark-mode subTitle direction-text-subtitle" : "subTitle direction-text-subtitle"}>
              {isEn ? directionContent.subtitle.en : directionContent.subtitle.zh}
            </p>
            <div className="direction-description">
              {isEn ? directionContent.description.en.map((paragraph, i) => (
                <p
                  key={i}
                  className={isDark ? "dark-mode subTitle direction-text" : "subTitle direction-text"}
                >
                  {paragraph}
                </p>
              )): directionContent.description.zh.map((paragraph, i) => (
                <p
                  key={i}
                  className={isDark ? "dark-mode subTitle direction-text" : "subTitle direction-text"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}