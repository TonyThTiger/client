import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import './App.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <div className="dashboard-content">
            <h2>Dashboard</h2>
            <p>Welcome to your learning dashboard. Select a module to begin.</p>
          </div>
        );
      case 'conversation':
        return (
          <div className="dashboard-content">
            <h2>Conversation</h2>
            <p>Practice your conversational skills here.</p>
            <p>Select a conversation partner or difficulty level to get started.</p>
          </div>
        );
      case 'vocabulary':
        return (
          <div className="dashboard-content">
            <h2>Vocabulary</h2>
            <p>Build and strengthen your vocabulary.</p>
            <p>Choose from different vocabulary sets or create your own.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-content">
            <h2>Settings</h2>
            <p>Manage your account and preferences.</p>
            <p>Adjust language, difficulty level, and notification settings.</p>
          </div>
        );
      default:
        return (
          <div className="dashboard-content">
            <h2>Dashboard</h2>
            <p>Welcome to your learning dashboard.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <div className="top-nav">
        <Link to="/" className="brand-button">LingoParrot</Link>
      </div>
      
      <div id='dashboard-sidebar'>
        <button 
          className={`sidebar-option ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
        </button>

        <button 
          className={`sidebar-option ${activeTab === 'conversation' ? 'active' : ''}`}
          onClick={() => setActiveTab('conversation')}
        >
          Conversation
        </button>
        <button 
          className={`sidebar-option ${activeTab === 'vocabulary' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          Vocabulary
        </button>
        <button 
          className={`sidebar-option ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div id="dashboard-header" className="App-header">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
