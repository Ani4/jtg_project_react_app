import React from "react";
import { RenderNavItem } from "./HeaderComponent";
function Footer() {
  return (
    <div className="footer">
      <div className=" container footer-box">
        <div classNmae="footer-left">
          <RenderNavItem
            navItems={[
              "Home",
              "products",
              "customers",
              "news+events",
              "about us"
            ]}
          />
        </div>
        <div classNmae="footer-right">
          &copy; Company Name. All right reserve.
        </div>
      </div>
    </div>
  );
}

export default Footer;
