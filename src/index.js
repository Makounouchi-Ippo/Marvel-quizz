import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase/index';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
 ,
  document.getElementById('root')
);

serviceWorker.unregister();
               