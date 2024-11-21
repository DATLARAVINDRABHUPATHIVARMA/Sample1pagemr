import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";

function Navbar2(){
  return (
    <nav className=" px-14 pt-3 border flex items-center justify-between " >
      <div className="flex gap-8 bg-bottom">
      <div><Button color="primary" radius="sm">Task Assignment</Button></div>
      <div className='pt-2'>Progress</div>
      <div className='pt-2'>Timeline</div>
      <div className='pt-2'>Reports</div>
      </div>
      <div className="flex gap-2">
      <div><Button color="success">+Assign</Button></div>
      <div><Button radius="sm">Templates</Button></div>
      <a href="https://www.google.com"><Button radius="sm">Knowledge Base</Button></a> 
      </div>
    </nav>
  );
}

export default Navbar2;
