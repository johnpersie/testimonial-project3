import "../src/sass/App.scss";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import StoryPage1 from "./components/StoryPage1";
import StoryPage2 from "./components/StoryPage2";
// import Grid from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <StoryPage1 />
      <StoryPage2 />
      {/* <Grid /> */}
    </div>
  );
}

export default App;
