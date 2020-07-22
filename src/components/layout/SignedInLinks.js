import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/create"> NewProject </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/"> LogOut </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating lighten-1 yellow">
          ZO
        </NavLink>{" "}
      </li>
    </ul>
  );
}

export default SignedInLinks;
