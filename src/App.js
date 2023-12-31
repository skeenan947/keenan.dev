import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import FeaturesPage from './FeaturesPage';
import SupportPage from './SupportPage';
import PrivacyPolicy from './PrivacyPolicy'; // Import the PrivacyPolicy component

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add this line */}
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
