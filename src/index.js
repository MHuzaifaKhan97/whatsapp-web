import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import reducer, { initialState } from '../src/components/reducer';
import { StateProvider } from '../src/components/StateProvider';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer} >
    <App />
  </StateProvider>,
  document.getElementById('root')
);

