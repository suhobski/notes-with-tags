import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyles from '@mui/material/GlobalStyles';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import globalStyles from './globalStyles';

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <GlobalStyles styles={globalStyles} />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
