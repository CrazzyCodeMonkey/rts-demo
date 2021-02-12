// import 3rd party libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// import custom components
import App from './App';
import store from './reducer/store';

// import Style Sheet
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElem = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElem
);
