import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Headings from "./components/Headings";
import Table from "./components/Table";


function App  ()  {
  return <div className="px-12">
    <Navbar1/>
    <Navbar2/>
    <Headings/>
    <Table/>
  </div>;
};

export default App;
