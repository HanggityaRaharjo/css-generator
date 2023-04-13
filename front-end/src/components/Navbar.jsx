import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Dashboard CSS Generator
        </a>
      </div>
      <div className="flex gap-5">
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
};

export default Navbar;
