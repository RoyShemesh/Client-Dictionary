import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Word from "./core/WordPage";
import RandomWord from "./core/RandomWord";
import ExactWord from "./core/ExactWord";

function App() {
  return (
    <div className="flex flex-col items-center align-middle">
      <Router>
        <div>
          <Routes>
            <Route path="/part-of-speech/:part" element={<RandomWord />} />
            <Route path="/:word/:partOfSpeech" element={<ExactWord />} />
            <Route path="/:word" element={<Word />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
