function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6">
            <div className="row g-2">
              <div
                className="col-6 position-relative wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="about-experience bg-secondary rounded">
                  <h1 className="display-1 mb-0">25</h1>
                  <small className="fs-5 fw-bold">Years Experience</small>
                </div>
              </div>

              <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid rounded"
                  src="/img/service-1.jpg"
                  alt="Service 1"
                />
              </div>

              <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                <img
                  className="img-fluid rounded"
                  src="/img/service-2.jpg"
                  alt="Service 2"
                />
              </div>

              <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                <img
                  className="img-fluid rounded"
                  src="/img/service-3.jpg"
                  alt="Service 3"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="section-title bg-white text-start text-primary pe-3">
              About Us
            </p>

            <h1 className="mb-4">Know About Our Dairy Farm & Our History</h1>

            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>

            <div className="row g-5 pt-2 mb-5">
              <div className="col-sm-6">
                <img
                  className="img-fluid mb-4"
                  src="/img/service.png"
                  alt="Dedicated Service"
                />
                <h5 className="mb-3">Dedicated Services</h5>
                <span>
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                </span>
              </div>

              <div className="col-sm-6">
                <img
                  className="img-fluid mb-4"
                  src="/img/product.png"
                  alt="Organic Product"
                />
                <h5 className="mb-3">Organic Products</h5>
                <span>
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                </span>
              </div>
            </div>

            <a href="#" className="btn btn-secondary rounded-pill py-3 px-5">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
