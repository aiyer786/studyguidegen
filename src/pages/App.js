// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StudyMaterials from './pages/StudyMaterials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
      </Routes>
    </Router>
  );
};

export default App;
