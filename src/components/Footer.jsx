import React from "react";
import { FaceBook, Logo, Send, Skype, Twitter, YouTube } from "../Icons";


function Footer() {
  const socialMedia = [<FaceBook />, <Twitter />,<Skype />,  <YouTube />];

  const usefulLinks = [
    "contact us",
    "how it works",
    "create",
    "explore",
    "terms & services"
  ];
  const community = [
    "help center",
    "partners",
    "suggestions",
    "blog",
    "newsletters"
  ];
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <Logo />
        <p >
          A new way to make the payments easy, reliable and 100% secure.
          claritatem itamconse quat. Exerci tationulla
        </p>

        <div className="footer__social-media-wrapper">
          {socialMedia.map((media, i) => (
            <div className="media" key={i}>
              {media}
            </div>
          ))}
        </div>
      </div>

      <ul>
        <h3>useful links</h3>
        {usefulLinks.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>

      <ul>
        <h3>community</h3>
        {community.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>

      <div className="footer__subscription">
        <h3>subscribe newsletter</h3>
        <p>
          Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        </p>
        <form action="#">
          <input type="email" name="email" id="" placeholder="Enter your email" required/>
          <button type="submit" aria-label="submit">
            <Send/>
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
