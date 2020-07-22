import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/signup"> SignUp </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/signin"> LogIn</NavLink>{" "}
      </li>
    </ul>
  );
}

export default SignedOutLinks;
