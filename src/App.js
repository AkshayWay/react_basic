import "./App.css";
// import Parent from "./Parent";
import UseEffectPractice from "./useEffectComp/UseEffectPractice";
import UseStatePractice from "./useStateComp/useStatePractice";
import UseMemoPractice from "./useMemoComp/useMemoPractice";
import ReduxData from "./reactRedux/index";
import Parent from "./parentChild/Parent,";
import HOC from "./HOC/userList";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/useEffect" element={<UseEffectPractice />} />
        <Route path="/useState" element={<UseStatePractice />} />
        <Route path="/useMemo" element={<UseMemoPractice />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/reduxData" element={<ReduxData />} />
        <Route path="/hoc" element={<HOC />} />
      </Routes>
    </Router>
  );
}

export default App;
