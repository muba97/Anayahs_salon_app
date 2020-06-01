import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfilePage from './Pages/ProfilePage';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="App" data-testid="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
