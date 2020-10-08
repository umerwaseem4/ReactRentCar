import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <Link to="/">How it works</Link> <Link to="/">Testimonials</Link>
              <Link to="/">Customer Caring</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className="footer__link--items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link> <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Cars</h2>
              <Link to="/">Become BF Driver</Link>{" "}
              <Link to="/">Requirments</Link>
              <Link to="/">Education</Link> <Link to="/">Behavior</Link>
            </div>
            <div className="footer__link--items">
              <h2>Social Media</h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_umerwaseem7/"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/umer.waseem.543/"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/unknown12004655"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <Link to="/" id="footer__logo">
                <AiOutlineCar />
                BabaFarid Rent
              </Link>
            </div>
            <p className="website__rights">
              &copy; Baba Farid 2020. All rights reserved
            </p>
            <div className="social__icons">
              <a
                className="social__icon--link"
                href="https://www.facebook.com/umer.waseem.543/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <AiFillFacebook />
              </a>
              <a
                className="social__icon--link"
                href="https://www.instagram.com/_umerwaseem7/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                className="social__icon--link"
                href="https://twitter.com/unknown12004655"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className="social__icon--link"
                href="https://www.linkedin.com/in/umer-waseem-9088b5182/"
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
