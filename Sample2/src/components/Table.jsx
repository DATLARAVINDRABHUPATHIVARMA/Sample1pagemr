import { Button, button, Navbar, nextui, Snippet } from "@nextui-org/react";
import React, { useState } from "react";

function Table() {
  const [users, setUsers] = useState([
    {
      "Task ID": <div className="text-xs fw-medium">TH-1.0</div>,
      "Risk Identification Activity": (
        <div className="text-xs fw-medium">Data Collection</div>
      ),
      Owner: <div className="text-xs fw-medium">John Smith</div>,
      "Due Date": <div className="text-xs fw-medium">Dec 15, 2024</div>,
      Progress: (
       <div className="w-32"><div class="progress" role="progressbar" aria-label="Example 1px High" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
       <div class="progress-bar w-75">75%</div></div>
     </div> 
      ),
      Priority: <div className="text-xs fw-medium"><button type="button" className="btn btn-danger btn-sm text-xs">High</button></div>,
      Status: <div className="text-xs fw-medium">In Progress</div>,
    },
    {
      "Task ID": <div className="text-xs fw-medium">TH-1.1</div>,
      "Risk Identification Activity": (
        <div className="text-xs fw-medium">Stakeholder Surveys</div>
      ),
      Owner: <div className="text-xs fw-medium">Sarah Lee</div>,
      "Due Date": <div className="text-xs fw-medium">Dec 10, 2024</div>,
      Progress: (
       <div className="w-32"><div class="progress" role="progressbar" aria-label="Basic Example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
       <div class="progress-bar w-96">90%</div></div>
     </div> 
      ),
      Priority: <div className="text-xs fw-medium"><button type="button" className="btn btn-warning btn-sm text-xs">Med</button></div>,
      Status: <div className="text-xs fw-medium">Near Complete</div>,
    },
  ]);
  return (
    <div className="pt-10 px-20">
      <div className="">
        <table className="table">
          <thead>
            <tr className="text-xs font-light">
              <th className="text-xs font-medium">Task ID</th>
              <th className="text-xs font-medium">
                Risk Identification Activity
              </th>
              <th className="text-xs font-medium">Owner</th>
              <th className="text-xs font-medium">Due Date</th>
              <th className="text-xs font-medium">Progress</th>
              <th className="text-xs font-medium">Priority</th>
              <th className="text-xs font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user["Task ID"]}</td>
                  <td>{user["Risk Identification Activity"]}</td>
                  <td>{user.Owner}</td>
                  <td>{user["Due Date"]}</td>
                  <td>{user.Progress}</td>
                  <td>{user.Priority}</td>
                  <td>{user.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
