import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../websitecomponent/Button";
import "./footer.css";
import CardTravelIcon from "@material-ui/icons/CardTravel";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heding">
          JOin the adventure newsletter to recive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-item">
            <h2>About us</h2>
            <Link to="/ sign-up">How its works</Link>
            <Link to="/"> Testimonials</Link>
            <Link to="/"> Careers</Link>
            <Link to="/"> Investors</Link>
            <Link to="/"> Terms of the service</Link>
          </div>
          <div className="footer-link-item">
            <h2>Contact us</h2>
            <Link to="/">Contact</Link>
            <Link to="/"> Support</Link>
            <Link to="/"> Destination</Link>
            <Link to="/"> Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-item">
            <h2>Videos</h2>
            <Link to="/">Submit video</Link>
            <Link to="/"> Ambassador</Link>
            <Link to="/"> Likes</Link>
            <Link to="/"> Views</Link>
          </div>
          <div className="footer-link-item">
            <h2>Social media</h2>
            <Link to="/">Facebook</Link>
            <Link to="/"> Twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/"> Youtube</Link>
          </div>
        </div>
      </div>

      {/* <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <CardTravelIcon />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2020</small>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;
