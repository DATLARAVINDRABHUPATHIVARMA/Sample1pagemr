import React from "react";
import { Button, ButtonGroup, Select } from "@nextui-org/react";

function Headings () {
  return (
    <nav className=" px-24 pt-10 flex items-center justify-between ">
      <div className="flex gap-1 bg-bottom h-8">
        <a href="/">
          <Button color="default" radius="sm" size="sm">
            List View
          </Button>
        </a>
        <a href="/">
          <Button color="default" variant="faded" radius="sm" size="sm">
            Board View
          </Button>
        </a>
        <a href="/">
          <Button color="default" variant="faded" radius="sm" size="sm">
            Matrix View
          </Button>
        </a>
      </div>
      <div className="flex gap-2 text-sm ">
        <div>
          <input
            className="w-72 h-8 px-5 border rounded-full"
            placeholder="Search tasks and owners"
            type="Search" id="search"
          />
        </div>
        <div className="w-28 h-8 border rounded-full text-center">
          <h5 className="text-sm p-1">
            Function<select className="select"></select>
          </h5>
        </div>
        <div className="w-28 h-8 border rounded-full text-center">
          <h5 className="text-sm p-1">
            Region<select className="Form-select"></select>
          </h5>
        </div>
      </div>
    </nav>
  );
};

export default Headings;
