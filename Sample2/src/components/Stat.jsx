import React from "react";

function Stat() {
  return (
    <div className="px-16 py-4 flex gap-20">
      <div><div className="text-slate-500 text-2xl fw-medium">82</div>
      <div className="text-xs fw-light pt-2">Total Risks Identified</div></div>
      <div><div className="text-red-600 text-2xl fw-medium">12</div>
      <div className="text-xs fw-light pt-2">High Priority Risks</div></div>
      <div><div className="text-blue-700 text-2xl fw-medium">45%</div>
      <div className="text-xs fw-light pt-2">Data Collection Progress</div></div>
      <div><div className="text-green-700 text-2xl fw-medium">24</div>
      <div className="text-xs fw-light pt-2">StakeHolders Engaged</div></div>
    </div>
  );
}

export default Stat;