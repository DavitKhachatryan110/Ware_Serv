import React from "react";
import logo from "../../image/Title-style.svg";
import logo1 from "../../image/green_ill.png";
import logo10 from "../../image/icons/Group 10.svg";
import logo11 from "../../image/icons/Group 11.svg";
import logo12 from "../../image/icons/Group 12.svg";
import slac from "../../image/icons/slac.svg"
import "./ourService.css";
function OurService() {
  return (
    <section>
      <div className="container">
        <div className="name">
          <div className="our">
            Our <span className="Service">Services</span>
          </div>
        </div>
        <div className="svg-div">
          <img src={logo} />
        </div>
        <div className="row">
          <div className=" col-md-6 col-xs-6 col-sm-6  left-div" >
           
          </div>
          <div className=" col-md-6 col-xs-6 col-sm-6">
            <div className=" right-div">
              <div className=" icon-div">
                <img src={logo10} />
              </div>
              <div className=" text-div">
                <div className="nameOfSection">
                  <span className="bold">Soft</span>Ware
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                  Learn More <span><img src={slac} /></span>
                </div>
              </div>
            </div>
            <div className=" right-div">
              <div className=" icon-div">
                <img src={logo11} />
              </div>
              <div className=" text-div">
                <div className="nameOfSection">
                  <span className="bold">Hard</span>Ware
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                  Learn More <span><img src={slac} /></span>
                </div>
              </div>
            </div>
            <div className=" right-div">
              <div className=" icon-div">
                <img src={logo12} />
              </div>
              <div className=" text-div">
                <div className="nameOfSection">
                  <span className="bold">Marketing</span>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et…
                </div>
                <div className="learn">
                  Learn More <span><img src={slac} /></span>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurService;
