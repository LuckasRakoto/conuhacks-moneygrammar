import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RessourcesPage from './pages/RessourcesBeginner';
import WelcomePage from './pages/Welcom';
import FirstQuiz from './pages/FirstQuiz';


function App() {
  return (
    <div className="App">
        <h1>MoneyGrammar</h1>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="ressources" element={<RessourcesPage />} />
            <Route path="ressources/quiz1" element={<FirstQuiz/>} />
          </Routes>
          </BrowserRouter>
    </div>




  );
}

export default App;
