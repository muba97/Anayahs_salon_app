import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, gql } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";
import ProfilePage from './Pages/ProfilePage';
import Navbar from './Components/Navbar';
import ServicePage from './Pages/ServicePage';
import NewServicePage from './Pages/NewServicePage';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:60001/graphql',
});

const client = new ApolloClient({
  cache,
  link
});

client
  .query({
    query: gql`
      {
        users {
          id
          firstName
          lastName
          email
          phoneNumber
        }
      }
    `,
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const App = () => {
  return (
    <div className="App" data-testid="app">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ProfilePage />
            </Route>
            <Route exact path="/services">
              <ServicePage />
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
