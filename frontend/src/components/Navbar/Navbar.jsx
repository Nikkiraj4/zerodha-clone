import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container-fluid navbar-container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Zerodha Logo"
            className="logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link menu-icon" to="#">
                <i className="bi bi-list"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;