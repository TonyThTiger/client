import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="top-nav">
        <Link to="/" className="brand-button">Parakeet</Link>
      </div>

      <header id="home-header" className="App-header" >
        <h1 className="App-title">Parakeet</h1>
        <p className="App-tagline">A Conversation Based Language Learning Tool</p>
        <nav className="App-nav">
          <Link to="/dashboard"><button id="start-button" className="nav-button">Start Learning</button></Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;