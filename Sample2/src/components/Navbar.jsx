import {Button, ButtonGroup} from "@nextui-org/react";
import React from "react";

function Navbar() {
  return (
    
    <div className="px-10 py-3 bg-blue-950 text-white text-xl font-semibold border flex gap-40">
      <div className="">Risk Identification Dashboard</div>
      <div className=""><ButtonGroup size="sm">
      <Button color='primary'>Main View</Button>
      <Button>Resource View</Button>
      <Button>Timeline View</Button>
      <Button>Risk Heatmap</Button>
    </ButtonGroup></div>
    </div>
  );
}

export default Navbar;