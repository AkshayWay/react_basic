import "./App.css";
import Parent from "./Parent";
import UseEffectPractice from "./useEffectComp/UseEffectPractice";
import UseStatePractice from "./useStateComp/useStatePractice";
import UseMemoPractice from "./useMemoComp/useMemoPractice";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/useEffect" element={<UseEffectPractice />} />
        <Route path="/useState" element={<UseStatePractice />} />
        <Route path="/useMemo" element={<UseMemoPractice />} />
      </Routes>
    </Router>
  );
}

export default App;
