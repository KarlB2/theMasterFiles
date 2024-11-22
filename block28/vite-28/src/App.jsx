import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Green from "./Green";
import Red from './Red';
import Blue from "./Blue";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link> |
          <Link to="/red">Red</Link> |
          <Link to="/blue">Blue</Link> |
          <Link to="/green">Green</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
          </Routes>
        </div>
        <div className="footer navbar">
          <Link to="/">Home</Link> |
          <Link to="/red">Red</Link> |
          <Link to="/blue">Blue</Link> |
          <Link to="/green">Green</Link>
        </div>
      </div>
    </>
  )
}

export default App
