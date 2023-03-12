import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Provider from './customRedux/components/mainFunctions/Provider';
import rootContext from './customRedux/components/mainFunctions/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider rootContext={rootContext}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
