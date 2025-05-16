import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/reset.css';
import './assets/css/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 