import React from "react";
import mypic from "../assets/mypic.png";
import reactIcon from "../assets/reactIcon.png";
import vscodeIcon from "../assets/vscodeIcon.png";
import bootstrapIcon from "../assets/bootstrapIcon.png";
import jsIcon from "../assets/jsIcon.png";
function MainPage() {
  return (
    <>
      <div id="mainPage_container">
        <div className="info_Box1">
          <div className="profileTitle">
            <p>
              I'M &nbsp;&nbsp;
              <span className="profileName">Aditya Duryodhan</span>
              <br />
              Frontend Developer [{"React.Js"}]
            </p>
          </div>

          <div className="profileImg">
            {/* <img src={mypic} alt="mypic" /> */}
            <img src={mypic} alt="mypic" />
          </div>
        </div>
      </div>
      <div className="icons">
        <img src={vscodeIcon} alt="icon" title="Virtual Studio"/>
        <img src={reactIcon} alt="icon" title="ReactJs"/>
        <img src={jsIcon} alt="icon" title="JavaScript"/>
        <img src={bootstrapIcon} alt="icon" title="Bootstrap"/>
      </div>
    </>
  );
}

export default MainPage;
