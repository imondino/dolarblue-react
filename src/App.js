import logo from './logo.svg';
import './App.css';
import DolarBlue from "./components/DolarBlue.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DolarBlue />} />
      </Routes>
    </Router>
  );
}

export default App;
