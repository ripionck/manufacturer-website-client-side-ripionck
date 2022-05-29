import React from "react";

const Footer = () => {
  return (
    <footer className="p-10">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="#home">
            Branding
          </a>
          <a className="link link-hover" href="#home">
            Design
          </a>
          <a className="link link-hover" href="#home">
            Marketing
          </a>
          <a className="link link-hover" href="#home">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover" href="#home">
            About us
          </a>
          <a className="link link-hover" href="#home">
            Contact
          </a>
          <a className="link link-hover" href="#home">
            Jobs
          </a>
          <a className="link link-hover" href="#home">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href="#home">
            Terms of use
          </a>
          <a className="link link-hover" href="#home">
            Privacy policy
          </a>
          <a className="link link-hover" href="#home">
            Cookie policy
          </a>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright &copy;2022 - All right reserved by RE-FRIDGE</p>
      </div>
    </footer>
  );
};

export default Footer;
