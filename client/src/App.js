import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, gql } from 'apollo-boost';
import ProfilePage from './Pages/ProfilePage';
import Navbar from './Components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:50000/graphql',
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
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
