import React from "react";
import Collapsible from 'react-collapsible';

function FaQ() {
  return (
    <div className="faqGenDiv">
      <div className="row main">
        <div className="col-md-6 col-xs-6 col-sm-6  faq-left">
          <div className="faq-title">
            <div> FAQ</div>
           
              <img src="image/Title-style.svg" />
            
          </div>
          <p>Most common answer and question</p>

          <div className="more">
            Learn More <img src="image/icons/slac.svg" className="img1" />
          </div>
        </div>
        <div className="col-md-6 col-xs-6 col-sm-6 faq-right">
          {/* <div className="tex-t ">
            <p  >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src="image/icons/arrow.svg" />
            </p>
            
          </div>
          <div className="tex-t">
            <p   >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src="image/icons/arrow.svg" />
            </p>
          </div>
          <div className="tex-t">
            <p  >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr{" "}
              <img src="image/icons/arrow.svg" />
            </p>
          </div> */}
          <Collapsible trigger="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"  className="accordion">
          <p  >
              000000000000000000
            </p>
      
    </Collapsible>
    <Collapsible trigger="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" className="accordion">
          <p  >
             0000000000000000000
            </p>
      
    </Collapsible>
    <Collapsible trigger="Lorem ipsum dolor sit amet, consetetur sadipscing elitr "  className="accordion">
          <p  >
           000000000000
            </p>
      
    </Collapsible>
          
    <Collapsible >
         
      
    </Collapsible>

</div>

      </div>
    </div>
  );
}
export default FaQ;
