import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Zerodha</h2>

      <div>
        <Link to="/signup">Signup</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/products">Products</Link>
        {" | "}
        <Link to="/pricing">Pricing</Link>
        {" | "}
        <Link to="/support">Support</Link>
      </div>
    </nav>
  );
}

export default Navbar;