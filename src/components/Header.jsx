import React from "react";
import { Logo } from "../Icons";

function Header() {
  const headerLinks = [
    "home",
    "programs",
    "courses",
    "admission",
    "testimonial"
  ];

  return (
    <header className="header">
      <Logo />
      <ul className="header__tabs">
        {headerLinks.map((link) => (
          <li key={link}>
            <a href="#" className="header__tab">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="header__login-btn btn">login</button>
      <button className="header__register-btn btn">registration</button>
    </header>
  );
}

export default Header;
