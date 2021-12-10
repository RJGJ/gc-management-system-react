import NavbarLayout from "../layouts/NavBarLayout";
import halfmoon from "halfmoon";
import SidebarLayout from "../layouts/SidebarLayout";

const Dash = () => {
  return (
    <div
      className="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom"
      data-sidebar-type="overlayed-sm-and-down"
    >
      <div className="sticky-alerts"></div>

      <NavbarLayout />

      <div
        className="sidebar-overlay"
        onClick={() => halfmoon.toggleSidebar()}
      ></div>

      <SidebarLayout />

      <div className="content-wrapper">...</div>

      <nav className="navbar navbar-fixed-bottom">...</nav>
    </div>
  );
};

export default Dash;
