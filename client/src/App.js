import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import Navbar from './Components/Navbar';
import RegisterPage from './Pages/RegisterPage';
import ServicePage from './Pages/ServicePage';
import NewServicePage from './Pages/NewServicePage';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:60001/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

const App = () => {
  return (
    <div className="App" data-testid="app">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/services">
              <ServicePage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/newservice">
              <NewServicePage />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
