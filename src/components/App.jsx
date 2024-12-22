import React from "react";
import "./App.css";
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');
  const [displayTextMode, setDisplayTextMode] = useState('Dark');

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextMode('light');
      setDisplayTextMode('Light');
      document.body.style.backgroundColor = "#454646";
    } else {
      setMode('light');
      setTextMode('dark');
      setDisplayTextMode('Dark');
      document.body.style.backgroundColor = "#fff";
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} />
        <Routes>
          <Route exact path="/" element={<Hero handleMode={handleMode} mode={mode} textMode={textMode} displayTextMode={displayTextMode} />} />
          {/* Removed the /contact route */}
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
