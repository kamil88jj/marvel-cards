import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

import './style/style.scss';


ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
      <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
    </React.StrictMode>
    );


