import React from 'react';
import ReactDOM from 'react-dom';
import { TodosProvider } from './context';

import './index.css';
import App from 'components/App';

ReactDOM.render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  document.getElementById('root')
);
