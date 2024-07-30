import React from "react";

const Navbar = () => {
  const navbarItems = [
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#resume", text: "Resume" },
    { href: "#portfolio", text: "Portfolio" },
  ];

  return (
    <nav
      className="navbar is-link is-fixed-top"
      style={{ backgroundColor: "transparent" }}>
      <div className="navbar-brand">
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-end">
          {navbarItems.map((item, index) => (
            <a key={index} className="navbar-item" href={item.href}>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
