import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/marketplace">marketplace</a>
        </li>
        <li>
          <a href="/wholesale-center">wholesale center</a>
        </li>
        <li>
          <a href="/seller-center">seller center</a>
        </li>
        <li>
          <a href="/services">services</a>
        </li>
        <li>
          <a href="/internships">internships</a>
        </li>
        <li>
          <a href="/events">events</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
