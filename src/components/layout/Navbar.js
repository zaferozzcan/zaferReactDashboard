import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLink";

const Navbar = () => {
  return (
    <nav className="nav nav-wrapper light-blue darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          {" "}
          Zafer Ozcan{" "}
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
