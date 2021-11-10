import "../src/sass/App.scss";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
