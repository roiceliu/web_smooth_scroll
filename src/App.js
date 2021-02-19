import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import InfoSection from "./components/InfoSection";
import { homeObjOne } from "./components/InfoSection/Data";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
      <InfoSection {...homeObjOne} />
    </>
  );
}
export default App;
