import React from "react";
import LeftPacket from "../Packets/SilverPacket/index"
import PlatinumPacket from "../Packets/PlatinumPacket/index"
import GoldPacket from "../Packets/GoldPacket/index"
import GetFreeTrail from "../FreeTrail/index"
function SupportPlan() {
  return (
    <div>
      <GetFreeTrail/>

<div className="container list">
<div className="row"> 
<div className="col-md-4 col-xs-4 col-sm-4 col-lg-4 col-xl-4  silver"> 
  <LeftPacket/>
  </div>
  <div className="col-md-4 col-xs-4 col-sm-4 col-lg-4 col-xl-4  gold"> 
  <GoldPacket/>
</div>
<div className="col-md-4 col-xs-4 col-sm-4 col-lg-4 col-xl-4 platinum"> 
  <PlatinumPacket/>
</div>
</div>

</div>

            
    </div>
  );
}
export default SupportPlan;
