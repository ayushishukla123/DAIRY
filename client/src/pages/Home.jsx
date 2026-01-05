import { Link } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <div className="container-fluid px-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/img/carousel-1.jpg"
                alt="Dairy Farm"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8 text-start">
                      <p className="fs-4 text-white">
                        Welcome to our dairy farm
                      </p>
                      <h1 className="display-1 text-white mb-5">
                        The Farm of Dairy Products
                      </h1>
                      <Link
                        to="/products"
                        className="btn btn-secondary rounded-pill py-3 px-5"
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                className="w-100"
                src="/img/carousel-2.jpg"
                alt="Organic Dairy"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-8 text-end">
                      <p className="fs-4 text-white">
                        Welcome to our dairy farm
                      </p>
                      <h1 className="display-1 text-white mb-5">
                        Best Organic Dairy Products
                      </h1>
                      <Link
                        to="/products"
                        className="btn btn-secondary rounded-pill py-3 px-5"
                      >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Products />
      <About />
      <Testimonial />
    </>
  );
}

export default Home;
