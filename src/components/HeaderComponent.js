import React from "react";

export function RenderNavItem(props) {
  let item = props.navItems.map(e => <li className="nav-list-item">{e}</li>);
  return <ul className="nav-list">{item}</ul>;
}
function Header() {
  return (
    <div className="header">
      <div className="nav container">
        <div class="nav-brand">
          <img
            className="logo"
            src="assets/images/logo.png "
            alt="company-logo"
          />
        </div>
        <RenderNavItem
          navItems={["products", "customers", "news+events", "about us"]}
        />
      </div>
    </div>
  );
}

export default Header;
