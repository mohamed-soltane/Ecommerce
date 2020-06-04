import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2 offset-md-1 text-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Women</Link>
              </li>
              <li>
                <Link to="/products">Men</Link>
              </li>
              <li>
                <Link to="/products">Kids</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-12 col-md-4 text-center">
            <h5>Contact Us</h5>
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 01-800-123-4567
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> info@mowel.com
            </a>
          </div>
        </div>
        <hr/>
        <div className="row">
            <p className="col-sm text-center pt-0">
            Copyright &copy;{new Date().getFullYear()} Nowel. All Rights Reserved By <b>Mohamed Soltani.</b>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
