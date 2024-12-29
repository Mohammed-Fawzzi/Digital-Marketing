import React from "react";
import fLogo from "../../Assets/f-logo.png";
import fCol from "../../Assets/02.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="pt-5 position-relative">
        <div className="container-fluid footer-box py-5 rounded-4 px-5">
          <div className="row g-5">
            <div className="col-md-4">
              <img src={fLogo} alt="footer-logo" className="footer-logo" />
              <p className="py-4 text-white-50">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure pain was born and I will give you a
                complete.
              </p>
              <div className="d-flex gap-4 footer-icon">
                <Link
                  to="https://www.linkedin.com/in/mohamed-fawzzi98/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin cursor-pointer"></i>
                </Link>
                <Link
                  to="https://github.com/Mohammed-Fawzzi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github ps-4 cursor-pointer"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/mofawzzi14/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f ps-4 cursor-pointer"></i>
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <h3 className="text-white">Let's talk</h3>
              <div className="footer-connection d-flex flex-column">
                <span className="text-white-50">
                  <i className="text-white fa-regular fa-envelope py-3 pe-2"></i>{" "}
                  info@yourdomain.com
                </span>
                <span className="text-white-50">
                  <i className="text-white pe-2 fa-solid fa-phone pb-3"></i> +7
                  (212) 654-33-35
                </span>
                <span className="text-white-50">
                  <i className="text-white pe-2 fa-solid fa-location-dot"></i>{" "}
                  patricia C. Amedee 4401{" "}
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <img
                src={fCol}
                alt="footer-col"
                className="w-100 footer-col object-fit-cover"
              />
            </div>
          </div>
        </div>
        <p className="text-center pt-3 footer-rights">
          © All Rights Reserved{" "}
          <Link
            to="tel:+20121580334"
            rel="noopener noreferrer"
            target="_blank"
            className="fw-bold text-decoration-none"
          >
            Mohamed Fawzzi.
          </Link>
        </p>
      </footer>
    </>
  );
}
