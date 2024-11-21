import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Table from './components/Table';
import Stat from './components/Stat';


function App  ()  {
  return <div className="px-12">
    <Navbar/>
    <Stat/>
    <Table/>
  </div>;
};

export default App;
