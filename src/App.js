import React from 'react';
import Header from './Header';
import ActivitySection from './ActivitySection';
import ContactSection from './ContactSection';
import './App.css'; // Import CSS file for global styles

function App() {
  return (
    <div className="homepage">
      <Header />
      <ActivitySection />
      <ContactSection />
    </div>
  );
}

export default App;
