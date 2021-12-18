import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { GameProvider } from './GameProvider';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

