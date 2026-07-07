import "./Hero.css";
import heroImage from "../../assets/images/landing.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
  <div className="container text-center">
      <img
        src={heroImage}
        alt="Zerodha Landing"
        className="hero-image"
      />

      <h1>Invest in everything</h1>

      <p>
  Online platform to invest in stocks, derivatives, mutual funds,
  ETFs, bonds, and more.
</p>

      <Link
          to="/signup"
            className="btn btn-primary btn-lg"
       >
         Sign up for free
</Link>
 </div>
    </section>
  );
}

export default Hero;