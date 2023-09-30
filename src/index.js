import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import { App } from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
