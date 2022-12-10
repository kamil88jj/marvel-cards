import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

import './style/style.scss';


ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
      <React.StrictMode>
        <BrowserRouter basename={window.location.pathname || ''}>
          <App />
        </BrowserRouter>
    </React.StrictMode>
    );


