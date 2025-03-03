import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark,isEn} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {isEn ? emoji("Welcome to contact me(zhengjinkai3@hdu.edu.cn)") :emoji("欢迎与我联系 (zhengjinkai3@hdu.edu.cn)")}
        </p>
      </div>
    </Fade>
  );
}
