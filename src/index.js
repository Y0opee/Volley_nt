import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './html_elements/button/button'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Button/>
  </React.StrictMode>
);

