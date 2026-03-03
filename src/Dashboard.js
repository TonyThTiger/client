import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import './App.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [vocabList, setVocabList] = useState([
    'hola',
    'gracias',
    'por favor',
    'adiós',
    'buenos días',
    'cómo estás',
    'bien',
    'mal',
    'qué tal',
    'cuánto',
    'cuesta',
    'abrir',
    'cerrar'
  ]);
  const [newWord, setNewWord] = useState('');
  const [sortAsc, setSortAsc] = useState(false);

  const sortedList = React.useMemo(() => {
    const arr = [...vocabList];
    if (sortAsc) arr.sort((a,b)=>a.localeCompare(b, 'es', {sensitivity:'base'}));
    return arr;
  }, [vocabList, sortAsc]);

  const addWord = () => {
    const trimmed = newWord.trim();
    if (!trimmed) return;
    setVocabList(prev => [...prev, trimmed]);
    setNewWord('');
  };

  // settings state
  const [difficulty, setDifficulty] = useState('standard');
  const [customPrompt, setCustomPrompt] = useState('');
  const [language, setLanguage] = useState('Spanish');

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  const renderContent = () => {
    switch(activeTab) {
      case 'Dashboard':
        return (
          <div className="dashboard-content">
            <h2>Dashboard</h2>
            <p>Welcome to your learning dashboard. Select a module to begin.</p>
            <p><br />You have learned 12 vocabulary words and completed 3 conversation modules this month!</p>
          </div>
        );
      case 'conversation':
        return (
          <div className="dashboard-content">
            <h2>Conversation</h2>
            <div id="conversation-container">
              <div className="chatbox">
                <text className='response'>Hola, ¿cómo estás?<br /></text> 
                <text>Hola, estoy bien. ¿Cómo estás tú?<br /></text>
                <text className='response'>Bien, gracias. ¿Cuál es el total?<br /></text>
                <text>Son $75 en total, por favor.<br /></text>
                <text className='response'>¿Aceptan tarjeta de crédito?<br /></text>
                <text>Sí, claro. Aquí está la máquina.<br /></text>
                <text className='response'>Listo, aquí está mi tarjeta.<br /></text>
                <text>Perfecto. ¿Deseas una bolsa?<br /></text>
                <text className='response'>Sí, por favor. Una bolsa grande.<br /></text>
                <text>Aquí tienes. ¡Gracias por tu compra!<br /></text>
                <text className='response'>¡De nada! ¡Que tengas un buen día!<br /></text>
                <text>¡Igual! ¡Adiós!<br /></text>
              </div>
              <input id="user-message" type="text" placeholder="Type your message here..."></input>
            </div>
            <button className='microphone-button'><img id="microphone-icon" src="microphone.png" alt="Microphone" /></button>
          </div>
        );
      case 'vocabulary':
        return (
          <div className="dashboard-content">
            <h2>Vocabulary</h2>
            <p>List of all known vocabulary words:</p>
            <button className="sort-button" onClick={() => setSortAsc(s=>!s)}>
             {sortAsc ? 'Unsort' : 'Sort A–Z'}
            </button>
            <div className="vocab-list">
             {sortedList.map((w, i) => (
                <div key={i} className="vocab-item">{w}</div>
              ))}
            </div>

            <div className="add-word-container">
              <input
                className="add-word-input"
                type="text"
                placeholder="Add a new vocabulary word"
                value={newWord}
                onChange={e => setNewWord(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') addWord(); }}
              />
              <button className="add-word-button" onClick={addWord}>Add</button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-content settings-content">
            <h2>Settings</h2>
            <div className="settings-group">
              <label>Adjust difficulty level:</label>
              <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="standard">Standard</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
            <div className="settings-group">
              <label>Add custom prompt:</label>
              <input
                type="text"
                value={customPrompt}
                onChange={e => setCustomPrompt(e.target.value)}
                placeholder="Enter a custom prompt..."
              />
            </div>
            <div className="settings-group">
              <label>Change Language:</label>
              <select value={language} onChange={e => setLanguage(e.target.value)}>
                <option>Spanish</option>
              </select>
            </div>
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
    <div className={`dashboard ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="top-nav">
        <Link to="/" className="brand-button">Parakeet</Link>
      </div>
      
      <div id='dashboard-sidebar'>
        <button id="sidebar-toggle" aria-pressed={sidebarCollapsed} onClick={toggleSidebar} title="Toggle sidebar">☰</button>

        <button 
          className={`sidebar-option ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          <span className="label">Dashboard</span>
        </button>

        <button 
          className={`sidebar-option ${activeTab === 'conversation' ? 'active' : ''}`}
          onClick={() => setActiveTab('conversation')}
        >
          <span className="label">Conversation</span>
        </button>
        <button 
          className={`sidebar-option ${activeTab === 'vocabulary' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocabulary')}
        >
          <span className="label">Vocabulary</span>
        </button>
        <button 
          className={`sidebar-option ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="label">Settings</span>
        </button>
      </div>

      <div id="dashboard-header" className="App-header">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
