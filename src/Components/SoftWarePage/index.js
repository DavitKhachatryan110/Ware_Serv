import React from "react"
import SoftWare from "../SoftWare/index"
import SupportPlan from "../SupportPlan/index"
import Navbar from "../navbar/index"
 import SendMessage from "../contactUs/Massige_container/index"

function SoftWarePage({color}){
    return(
        <div>
             <Navbar style={color}/>
            <div className="container">
           </div>
<SoftWare/>
<SupportPlan/>
<div className="contact-section">
<SendMessage/></div>
        </div>
    )
}
export default SoftWarePage