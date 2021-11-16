import "../src/sass/App.scss";
import AboutUs from "./components/AboutUs";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import OurServices from "./components/OurServices";
import CoreValues from "./components/CoreValues";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutUs />
      <CoreValues />
      <OurServices />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
