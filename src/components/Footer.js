import React from "react";
import { pageLinks } from "../data";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-link">
                  {link.text}
                </a>
              </li>
            );
          })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((social) => {
        const { id, href, icon} = social 
            return (
              <li key={id}>
            <a
              href={href}
              target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
            )
          })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{ new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
