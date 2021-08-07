import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./Components/Layout/Navbar";
import Search from "./Components/Search/Search";
import Alert from "./Components/Alert/Alert";
import Users from "./Components/Users/Users";
import "./App.css";
import axios from "axios";
import About from "./Components/Page/About";
import User from "./Components/Users/User";


class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: true,
    alert: null,
  };

  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ user: res.data, loading: false });
  };

  clearUsersHandler = () => {
    this.setState({ users: [] });
  };

  alertHandler = (msg, style) => {
    this.setState({ alert: { msg, style } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  cancelHandler = () => {
    this.setState({alert: null})
  }

  render() {
    const { users, loading, alert, user } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert onAlert={alert} cancelHandler={this.cancelHandler} />
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="container">
                  <Search
                    onSearchText={this.searchTextHandler}
                    onClearUsers={this.clearUsersHandler}
                    showUser={users.length > 0 ? true : false}
                    onAlert={this.alertHandler}
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
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;