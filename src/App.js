import "../src/sass/App.scss";
import AboutUs from "./components/AboutUs";
import OurCoreValues from "./components/OurCoreValues";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <OurCoreValues />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
