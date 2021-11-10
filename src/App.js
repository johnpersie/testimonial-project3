import "../src/sass/App.scss";
import LandingPage from "./components/LandingPage";
import StoryPage1 from "./components/StoryPage1";
import StoryPage2 from "./components/StoryPage2";
import Testifiers from "./components/testifier/Testifiers";
// import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Testifiers2 from "./components/testifier/Testifiers2";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <StoryPage1 />
      <Testifiers />
      <StoryPage2 />
      <Testifiers2 />
      {/* <CallToAction /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
