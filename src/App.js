import React from 'react';
import './App.css';
import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/login.jsx';
import SignupPage from './pages/signup';
import DictionaryPage from './pages/dictionary.jsx';
function App() {
  return (
    <div className='App'>
      <DictionaryPage/>
    </div>
  );
}

export default App;