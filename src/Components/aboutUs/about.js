import React from "react";
import "./about.css";
import svg30 from "../../image/icons1/Group 30.svg";
import svg31 from "../../image/icons1/Group 31.svg";
import svg32 from "../../image/icons1/Group 32.svg";
import svg33 from "../../image/icons1/Group 33.svg";
import TitleSvg from "../../image/Title-style.svg";
function About() {
  return (
    <section className="about">
        <div className="row  mmargin">
      <div className="col-md-6 col-xs-6 col-sm-6 left_div">
        <div className="context">
          <div className="gen-title">
            <div className="title">
              Why <span className="boldd">Choose</span> Us
            </div>
            <img src={TitleSvg} className="svg" />
          </div>
          <div className="medium_text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </div>
          <div className="small_text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xs-6 col-sm-6 right_div">
          <div className="div-block-one">
        <div className="squareBlue ">
          <img src={svg30} className="iconStyle"/>
          <div className="button_text">Lorem ipsum dolor</div>
          <div className="button_largeText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        <div className="squareGreen first">
          <img src={svg31}  className="iconStyle"/>
          <div className="button_text">Lorem ipsum dolor</div>
          <div className="button_largeText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        </div>
        <div className="div-block-two">
        <div className="squareGreen  ">
          <img src={svg32}   className="iconStyle"/>
          <div className="button_text">Lorem ipsum dolor</div>
          <div className="button_largeText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        <div className="squareBlue first">
          <img src={svg33} className="iconStyle" />
          <div className="button_text">Lorem ipsum dolor</div>
          <div className="button_largeText">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat.
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default About;
