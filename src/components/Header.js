// import { useState } from "react";
// import { LOGO_URL } from "../../utils/constant";
// import { Link } from "react-router-dom";


// export const Header = () => {

//   const [btnNameReact, setbtnNameReact ] = useState ("Login");
//     return (
//       <div className="res-header">
//         <img
//           className="res-logo-logo"
//           src={LOGO_URL}
//         />
//         <div className="res-nav-items">
//           <ul>
//             <li><Link to="/">Home </Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/contact">Cart</Link></li>
          
//           </ul>
//         </div>
//         <img
//           className="res-cart-img"
//           src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
//         />
//           <button className="login" onClick={ () => {btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
//       </div>
//     );
//   };
//   export default Header;

import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
const Logo = () => (
  <img
    src={LOGO_URL}
    alt="logo"
  ></img>
);

// header component
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="nav">
      <Logo />
      
      <ul>
        <Link
          to="/"
          className="link"
        >
          <li>Home</li>
        </Link>
        <Link
        to="/about"
        className="link"
        > 
          <li>About Us</li>
          </Link> 
        <Link
          to="/contact"
          className="link"
        >
          <li>Contact Us</li>
        </Link>
        <Link
          to="/cart"
          className="link"
        >
          <li>Cart</li>
        </Link>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Header;