import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import 'pure-css';
import './theme/theme.css';

import { store } from 'store';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
);
