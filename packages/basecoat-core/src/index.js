import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('basecoat'),
);
