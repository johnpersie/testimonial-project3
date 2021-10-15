import "../src/sass/App.scss";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import StoryPage1 from "./components/StoryPage1";
// import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StoryPage1 />
      {/* <Grid /> */}
    </div>
  );
}

export default App;
