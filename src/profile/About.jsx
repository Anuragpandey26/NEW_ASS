import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...</p>
          </div>
        );
      case 'experiences':
        return <p>dave i have exprenice in salesforce.</p>;
      case 'recommended':
        return <p>plz recommended me.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="about-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default About;
