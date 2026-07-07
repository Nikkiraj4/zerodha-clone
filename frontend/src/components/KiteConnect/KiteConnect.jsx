import "./KiteConnect.css";

import kcLogo from "../../assets/images/kite-connect.svg";
import kcImage from "../../assets/images/kc-banner-image.svg";

function KiteConnect() {
  return (
    <section className="kite-connect">
      <div className="container">
        <div className="row align-items-center">

          {/* Logo */}
          <div className="col-lg-3 text-center text-lg-start">
            <img
              src={kcLogo}
              alt="Kite Connect"
              className="kc-logo"
            />
          </div>

          {/* Text */}
          <div className="col-lg-6">
            <p className="kc-text">
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more.
              <a href="#"> Explore →</a>
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-3 text-center">
            <img
              src={kcImage}
              alt="Kite Connect Banner"
              className="kc-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default KiteConnect;