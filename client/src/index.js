// react and reactdom
import React from 'react';
import ReactDOM from 'react-dom/client';
// css
import './index.css';
// app component 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

