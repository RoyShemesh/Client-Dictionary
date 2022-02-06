import React from "react";
import "./styles/main.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Word from "./core/WordPage";
import RandomWord from "./core/RandomWord";
import ExactWord from "./core/ExactWord";
import Welcome from "./core/Welcome";

function App() {
  return (
    <div className="flex flex-col items-center align-middle">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/part-of-speech/:part" element={<RandomWord />} />
            <Route path="/:word" element={<Word />} />
            <Route path="/:word/:partOfSpeech" element={<ExactWord />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
