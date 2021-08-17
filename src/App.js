import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./Components/Layout/Navbar";
import Search from "./Components/Search/Search";
import Alert from "./Components/Alert/Alert";
import Users from "./Components/Users/Users";
import "./App.css";
import axios from "axios";
import About from "./Components/Page/About";
import User from "./Components/Users/User";


function App() {

  const[users, setusers] = useState([]);
  const[repos, setrepos] = useState([]);
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  const [alert, setalert] = useState(null);

  const searchTextHandler = async (text) => {
    setloading(true);
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    setusers(res.data.items);
    setloading(false);
  };

  const getUser = async (username) => {
    setloading(true);
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    setuser(res.data);
    setloading(false);
  };

  const getUserRepos = async (username) => {
    setloading(true);
    const url = `https://api.github.com/users/${username}/repos?per_page=5&created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    setrepos(res.data);
    setloading(false);
  };

  const clearUsersHandler = () => {
    setusers([]);
  };

  const alertHandler = (msg, style) => {
    setalert({ msg, style });
    setTimeout(() => {
      setalert(null);
    }, 4000);
  };

  const cancelHandler = () => {
    setalert(null);
  };

    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert onAlert={alert} cancelHandler={cancelHandler} />
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="container">
                  <Search
                    onSearchText={searchTextHandler}
                    onClearUsers={clearUsersHandler}
                    showUser={users.length > 0 ? true : false}
                    onAlert={alertHandler}
                  />
                  <Users users={users} loading={loading} />
                </div>
              )}
            />
            <Route exact path="/about/" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
export default App;