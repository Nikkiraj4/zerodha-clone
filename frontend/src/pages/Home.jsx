import Hero from "../components/Hero/Hero";
import Trust from "../components/Trust/Trust";
import KiteConnect from "../components/KiteConnect/KiteConnect";
import Pricing from "../components/Pricing/Pricing";
import Education from "../components/Education/Education";
import OpenAccount from "../components/OpenAccount/OpenAccount";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <KiteConnect />
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <Footer />
    </>
  );
}

export default Home;