import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PopupContext from './components/Notification/PopupContext';
import AuthContext from './components/Authentication/AuthFunctions';
import CardContext from './components/CardContext/CardContext';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PopupContext>
        <AuthContext>
          <CardContext>
            <App />
          </CardContext>
        </AuthContext>
      </PopupContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
