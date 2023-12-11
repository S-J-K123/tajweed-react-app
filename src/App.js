import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz/Quiz";
import Idghaam from "../src/components/Quiz/Idghaam"
import Iqlaab from "../src/components/Quiz/Iqlaab"
import Ikhfah from "../src/components/Quiz/Ikhfah"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/idghaam" element={<Idghaam/>}></Route>
          <Route path="/iqlaab" element={<Iqlaab/>}></Route>
          <Route path="/ikhfah" element={<Ikhfah/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
