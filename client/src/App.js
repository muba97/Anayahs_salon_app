import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import Navbar from './Components/Navbar';
import RegisterPage from './Pages/RegisterPage';
import ServicePage from './Pages/ServicePage';
import NewServicePage from './Pages/NewServicePage';

const client = new ApolloClient({
  uri: 'http://localhost:50000/graphql',
  cache: new InMemoryCache(),
});

const id = '5f0b8d54dd147401c51afd9f';

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
              <ProfilePage id={id} />
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
