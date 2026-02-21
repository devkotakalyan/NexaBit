import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NexaBitLanding from "./pages/NexaBitLanding";
import NexaBitAbout from "./pages/NexaBitAbout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NexaBitLanding />} />
          <Route path="/about" element={<NexaBitAbout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
