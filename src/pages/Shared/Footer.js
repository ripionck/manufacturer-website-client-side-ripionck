import React from "react";

const Footer = () => {
  return (
    <footer className="p-10">
      <footer class="footer p-10 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover" href="/">
            Branding
          </a>
          <a class="link link-hover" href="/">
            Design
          </a>
          <a class="link link-hover" href="/">
            Marketing
          </a>
          <a class="link link-hover" href="/">
            Advertisement
          </a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover" href="/">
            About us
          </a>
          <a class="link link-hover" href="/">
            Contact
          </a>
          <a class="link link-hover" href="/">
            Jobs
          </a>
          <a class="link link-hover" href="/">
            Press kit
          </a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover" href="/">
            Terms of use
          </a>
          <a class="link link-hover" href="/">
            Privacy policy
          </a>
          <a class="link link-hover" href="/">
            Cookie policy
          </a>
        </div>
        <div>
          <span class="footer-title">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="my-3 text-center">
        <p>Copyright &copy;2022 - All right reserved by RE-FRIDGE</p>
      </div>
    </footer>
  );
};

export default Footer;
