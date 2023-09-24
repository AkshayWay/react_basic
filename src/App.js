import "./App.css";
import Parent from "./Parent";
import UseEffectPractice from "./useEffectComp/UseEffectPractice";
import UseStatePractice from "./useStateComp/useStatePractice";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/useEffect" element={<UseEffectPractice />} />
        <Route path="/useState" element={<UseStatePractice />} />
      </Routes>
    </Router>
  );
}

export default App;
