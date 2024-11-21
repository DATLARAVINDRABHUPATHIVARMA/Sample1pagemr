import { Button, button, Navbar, nextui, Snippet } from "@nextui-org/react";
import React, { useState } from "react";

function Table() {
  const [users, setUsers] = useState([
    {
     Task: <div><div className="text-xs fw-medium">TH-1.0</div><div className="text-xs  fw-medium">Data Collection</div></div>,
      OWNERS: <div><Button variant="bordered">Select Primary Owner <Button variant="" size='sm'>+Add Supporting</Button></Button></div>,
      "BUSINESS FUNCTION": <Button radius='full' size='sm'>Enterprise Risk</Button>,
    },
    {
      Task: <div><div className="text-xs fw-medium">TH-1.1</div><div className="text-xs  fw-medium">Stakeholder Input</div></div>,
      OWNERS: <div><Button variant="faded">Risk Team Lead <Button variant="" size='sm'>+3more</Button></Button></div>,
      "BUSINESS FUNCTION": <div className='flex gap-2'><Button radius='full' size='sm'>finance</Button><Button radius='full' size='sm'>adc</Button></div>,
    },
  ]);
  return (
    <div className="pt-10 px-32">
      <div className="">
        <table className="table">
          <thead>
            <tr className="">
              <th>TASK</th>
              <th>OWNERS</th>
              <th>BUSINESS FUNCTION</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user)=>{
             return <tr>
                <td>{user.Task}</td>
                <td>{user.OWNERS}</td>
                <td>{user["BUSINESS FUNCTION"]}</td>
              </tr>
            }
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
