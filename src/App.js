import "../src/sass/App.scss";
import HeaderBar from "./components/HeaderBar";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import StoryPage1 from "./components/StoryPage1";
import StoryPage2 from "./components/StoryPage2";
import Testifiers from "./components/testifier/Testifiers";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Testifiers2 from "./components/testifier/Testifiers2";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Navbar />
      <LandingPage />
      <StoryPage1 />
      <Testifiers />
      <StoryPage2 />
      <Testifiers2 />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
