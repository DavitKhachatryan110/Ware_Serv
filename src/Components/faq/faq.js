import React from "react";
import "./fac.css";
import arrow from "../../image/icons/arrow.svg";
import logo from "../../image/Title-style.svg";
import slac from "../../image/icons/slac.svg";
function FaQ() {
  return (
    <div className="faqGenDiv">
      <div className="row main">
        <div className="col-md-6 col-xs-6 col-sm-6  faq-left">
          <div className="faq-title">
            <div> FAQ</div>
           
              <img src={logo} />
            
          </div>
          <p>Most common answer and question</p>

          <div className="more">
            Learn More <img src={slac} className="img1" />
          </div>
        </div>
        <div className="col-md-6 col-xs-6 col-sm-6 faq-right">
          <div className="tex-t">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src={arrow} />
            </p>
          </div>
          <div className="tex-t">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src={arrow} />
            </p>
          </div>
          <div className="tex-t">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src={arrow} />
            </p>
          </div>
        </div>
      </div>
      <div className="subscribes">
<div className="sub-text-div">
<span className='sub-span'>Subscribe </span>To Our Newsletter

</div>

<div class="form__group field">
  <input type="input" className="form__field" placeholder="Email Adress" name="Email Adress" id='name' required />
  
          <div className="more-second"> Learn More <img src={slac}  /></div>
          
</div>






      </div>
    </div>
  );
}
export default FaQ;
