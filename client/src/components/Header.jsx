import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  // ✅ check user login
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-dark px-0 d-none d-lg-block">
        <div className="row g-0">
          <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-light">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-link text-light" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div
              className="h-100 d-inline-flex align-items-center px-4 py-2"
              style={{ backgroundColor: "#EDDD5E", color: "#212529" }}
            >
              <span className="me-2 fw-semi-bold">
                <i className="fa fa-phone-alt me-2"></i>Call Us:
              </span>
              <span className="fw-bold">+91 9301023543</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          <h1 className="m-0">Amrit Dairy</h1>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>

            {/* 🔐 USER NOT LOGGED IN */}
            {!user && (
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            )}

            {/* ✅ USER LOGGED IN */}
            {user && (
              <>
                <span className="nav-item nav-link fw-bold">
                  Hi, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-link nav-item nav-link text-danger"
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
