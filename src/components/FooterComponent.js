import React from "react";
import { RenderNavItem } from "./HeaderComponent";
function Footer() {
  return (
    <footer>
      <div className=" container ">
        <div className="footer-box">
          <div classNmae="footer-left">
            <RenderNavItem
              navItems={[
                "Home",
                "products",
                "customers",
                "news+events",
                "about us"
              ]}
              styleName="footer"
            />
          </div>
          <div className="footer-right">
            &copy; Company Name. All right reserve.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
