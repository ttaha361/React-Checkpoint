import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TryValuePage from './pages/TryValuePage';
import NewRoutePage from './pages/newRoutePage'; // Fixed the component name to start with a capital letter

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tryValue" element={<TryValuePage />} />
        <Route path="/newRoute" element={<NewRoutePage />} /> {/* Updated the path to match the component */}
      </Routes>
    </Router>
  );
}

export default App;
