import "./Trust.css";
import ecosystemImage from "../../assets/images/ecosystem.png";
import LinkArrow from "../LinkArrow/LinkArrow";

function Trust() {
  return (
    <section className="trust">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <h2 className="trust-heading">
              Trust with confidence
            </h2>

            <div className="trust-item">
              <h4>Customer-first always</h4>

              <p>
                That's why 1.6+ crore customers trust Zerodha with
                approximately ₹6 lakh crores of equity investments,
                making us India's largest broker.
              </p>
            </div>

            <div className="trust-item">
              <h4>No spam or gimmicks</h4>

              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High-quality apps that you use at your
                pace, the way you like.
              </p>
            </div>

            <div className="trust-item">
              <h4>The Zerodha universe</h4>

              <p>
                Not just an app, but a whole ecosystem. Our investments
                in 30+ fintech startups offer you tailored services
                specific to your needs.
              </p>
            </div>

            <div className="trust-item">
              <h4>Do better with money</h4>

              <p>
                With initiatives like Nudge and Kill Switch, we don't
                just facilitate transactions, but actively help you
                do better with your money.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">

            <img
              src={ecosystemImage}
              alt="Zerodha Ecosystem"
              className="img-fluid trust-image"
              
            />
            <LinkArrow
    text="Explore products"
    href="#"
/>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Trust;