import React from "react";
import "./style.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 mb-5">
          <div className=" mt-5 mb-5 col-md-8 text-center mx-auto">
            <h1>Only 2 minutes to switch</h1>
            <h5>& we will take care of everything else</h5>
            <button type="button" class="btn btn-theme mt-4">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5 footer-ul-container">
        <div className="row">
          <div className="col-md-4 ml-auto align-self-center">
            <h6>
              <strong>Subscribe to Renewables & Technologies via Email</strong>
            </h6>
            <div>
              <form className="mt-3 form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="inputFooterEmail"
                    placeholder="Email Address"
                  />
                </div>
                <button type="submit" class="btn btn-primary mb-2">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-end">
            <ul className="mr-5 footer-links-list">
              <li>
                <NavLink className="text-decoration-none footer-navlink" to="/">
                  WORK WITH US
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none footer-navlink" to="/">
                  PRIVACY POLICY
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none footer-navlink" to="/">
                  TERMS & CONDITIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/contact"
                >
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-decoration-none footer-navlink"
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid end-container">
        <dv className="row">
          <div className="col-md-12 mt-3">
            <div className="d-flex justify-space-between">
              <div>© Renewables & Technologies</div>
              <ul className="social-icons d-flex ml-auto">
                <li>
                  <FaFacebookF color="white" />
                </li>
                <li>
                  <FaInstagram color="white" />
                </li>
                <li>
                  <FaTwitter color="white" />
                </li>
              </ul>
            </div>
          </div>
        </dv>
      </div>
    </>
  );
};

export default Footer;
