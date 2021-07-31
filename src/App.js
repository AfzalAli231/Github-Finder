import React from "react";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import User from "./Components/Users/User";
import axios from "axios";
import Search from "./Components/Search/Search";
import Alert from "./Components/Alert/Alert";

class App extends React.Component {
  state = {
    users: [],
    loading: true,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const url = "https://api.github.com/users";
  //   const res = await axios.get(url);
  //   this.setState({ users: res.data, loading: false });
  //   console.log(res.data);
  // }

  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsersHandler = () => {
    this.setState({ users: [] });
  };

  alertHandler = (msg, style) => {
    this.setState({ alert: { msg, style, } })
    setTimeout(() => {
      this.setState({alert:null})
    },4000)
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <Alert onAlert={alert}/>
          <Search
            onSearchText={this.searchTextHandler}
            onClearUsers={this.clearUsersHandler}
            showUser={users.length > 0 ? true : false}
            onAlert={this.alertHandler}
          />
          <User users={users} loading={loading} />
        </div>
      </div>
    );
  }
}
export default App;