import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  // const [user, setUser] = useState(null)
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) :
          <div className="app_body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route exact path='/' >
                  <Chat />
                </Route>

              </Switch>
            </Router>
          </div>
      }
    </div>
  );
}

export default App;
