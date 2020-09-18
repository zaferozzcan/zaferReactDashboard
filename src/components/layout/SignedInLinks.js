// import React from "react";
// import { NavLink } from "react-router-dom";

// function SignedInLinks() {
//   return (
//     <ul className="right hide-on-med-and-down">
//       <li>
//         <NavLink to="/create"> NewProject </NavLink>{" "}
//       </li>
//       <li>
//         <NavLink to="/"> LogOut </NavLink>{" "}
//       </li>
//       <li>
//         <NavLink to="/" className="btn btn-floating lighten-1 yellow">
//           ZO
//         </NavLink>{" "}
//       </li>
//     </ul>
//   );
// }

// export default SignedInLinks;

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
