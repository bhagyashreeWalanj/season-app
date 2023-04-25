import About from "./components/About";
import Headers from "./components/Headers";
import Sections from "./components/Sections";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Headers />

        <Routes>
          <Route path="/about" element={<About />}>
            {/* About page content goes here */}
          </Route>
          <Route path="/">{/* Home page content goes here */}</Route>
        </Routes>
      </Router>
      <Sections />
      <About />
    </>
  );
}

export default App;
