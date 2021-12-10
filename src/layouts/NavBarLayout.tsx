import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import halfmoon from "halfmoon";
import { useState } from "react";
import userState from "../lib/recoil/user";

library.add(faBars);
library.add(faTimes);

interface Navlink {
  name: string;
  link: string;
  active: boolean;
}

const NavbarLayout = () => {
  const [sidebarState, setSidebarSate] = useState(true);
  const [navLinks, setNavLinks] = useState([
    { name: "Home", link: "", active: true },
    { name: "Login", link: "/auth", active: false },
  ]);

  const handleToggle = () => {
    halfmoon.toggleSidebar();
    setSidebarSate(!sidebarState);
  };

  const handleNavlinkClick = (el: Navlink) => {
    setNavLinks({ ...navLinks.map((item) => item) });
    console.log(navLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="btn btn-action" type="button" onClick={handleToggle}>
          <FontAwesomeIcon icon={sidebarState ? "times" : "bars"} />
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </div>
      <Link to="/" className="navbar-brand">
        GC Management System
      </Link>
      <ul className="navbar-nav">
        {/* {navLinks.map((el) => (
          <li className={el.active ? "nav-item active" : "nav-item"}>
            <Link
              className="nav-link"
              to={el.link}
              onClick={() => handleNavlinkClick(el)}
              key={el.name}
            >
              {el.name}
            </Link>
          </li>
        ))} */}
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/auth">
            Auth
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarLayout;
