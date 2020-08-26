// import React from "react";
// import { Link } from "react-router-dom";
// import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLink";
// import { connect } from "react-redux";

// const Navbar = (props) => {
//   const { auth } = props;
//   return (
//     <nav className="nav-wrapper light-blue darken-3">
//       <div className="container">
//         <Link to="/" className="brand-logo">
//           Zafer Ozcan
//         </Link>
//         <SignedInLinks />
//         <SignedOutLinks />
//       </div>
//     </nav>
//   );
// };

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     auth: state.firebase.auth
//   };
// };

// export default connect(mapStateToProps)(Navbar);

import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
