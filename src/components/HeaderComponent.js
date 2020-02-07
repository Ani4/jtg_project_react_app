import React, { useEffect } from "react";
import $ from "jquery";

export function RenderNavItem(props) {
  let item = props.navItems.map(e => (
    <li className={`${props.styleName}-list-item`}>
      <a href="#">{e}</a>
    </li>
  ));
  return (
    <ul className={`${props.styleName}-list`} id="active">
      {item}
    </ul>
  );
}

function Header() {
  useEffect(() => {
    $("#toggle").click(function() {
      if ($(".nav-list").attr("id") === "active") $(".nav-list").attr("id", "");
      else $(".nav-list").attr("id", "active");
    });
  });
  return (
    <header className="header">
      <div className="nav container">
        <div class="nav-brand">
          <img
            className="logo"
            src="assets/images/logo.png "
            alt="company-logo"
          />
          <div className="nav-toggle" id="toggle">
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <RenderNavItem
          navItems={["products", "customers", "news + events", "about us"]}
          styleName="nav"
        />
      </div>
    </header>
  );
}

export default Header;
