import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid footer mt-5 py-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ backgroundColor: "#404A3D" }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Office */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Our Office</h5>
            <p className="text-light mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              123 Street, New York, USA
            </p>
            <p className="text-light mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              +012 345 67890
            </p>
            <p className="text-light mb-2">
              <i className="fa fa-envelope me-3"></i>
              info@example.com
            </p>

            {/* Social Icons */}
            <div className="d-flex pt-3">
              {["twitter", "facebook-f", "youtube", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="btn btn-square rounded-circle me-2"
                    style={{
                      backgroundColor: "#EDDD5E",
                      color: "#404A3D",
                    }}
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-light" href="#">
              About Us
            </a>
            <a className="btn btn-link text-light" href="#">
              Contact Us
            </a>
            <a className="btn btn-link text-light" href="#">
              Our Services
            </a>
            <a className="btn btn-link text-light" href="#">
              Terms & Condition
            </a>
            <a className="btn btn-link text-light" href="#">
              Support
            </a>
          </div>

          {/* Business Hours */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Business Hours</h5>
            <p className="text-light mb-1">Monday - Friday</p>
            <h6 className="text-light">09:00 am - 07:00 pm</h6>
            <p className="text-light mb-1">Saturday</p>
            <h6 className="text-light">09:00 am - 12:00 pm</h6>
            <p className="text-light mb-1">Sunday</p>
            <h6 className="text-light">Closed</h6>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="text-light">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>

            <div className="position-relative w-100">
              <input
                className="form-control bg-transparent text-light w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />

              {/* SignUp Button */}
              <button
                type="button"
                style={{
                  backgroundColor: "#EDDD5E",
                  color: "#404A3D",
                  border: "none",
                }}
                className="btn py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
