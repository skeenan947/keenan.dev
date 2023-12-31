import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'; // Import the NavBar component
import HomePage from './HomePage';
import FeaturesPage from './FeaturesPage';
import SupportPage from './SupportPage';

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Include the NavBar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/support" element={<SupportPage />} />
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
