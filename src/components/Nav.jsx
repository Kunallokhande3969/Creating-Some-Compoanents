import React from "react";
const Nav = () => {
  return (
    <div>
      <div className="flex  h-[70px]  justify-between px-6 w-full bg-amber-800 text-white  ">
        <div className="flex items-center justify-center">Home</div>
        <div className="flex items-center justify-center gap-6">
          <h4>About </h4>
          <h4>Learn</h4>
          <h4>Sign Here</h4>
          <h4>logout</h4>
        </div>
      </div>
    </div>
  );
};
export default Nav;
