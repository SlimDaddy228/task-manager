import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { storeBuilder } from './store/store.builder';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext(storeBuilder)

root.render(
  <Context.Provider value={storeBuilder}>
    <App/>
  </Context.Provider>
);
