import React from "react";
import Navbar from "./Components/Layout/Navbar";
import "./App.css";
import User from "./Components/Users/User";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
  };
  
  async componentDidMount() {
    this.setState({ loading: true, });
    const url = 'https://api.github.com/users';
    const res = await axios.get(url);
    this.setState({ users:res.data, loading: false, });
    }
  
  render() {
    
    return (
      <>
        <Navbar />
        <div className="container">
          <User users={this.state.users} />
        </div>
      </>
    );
  }
  }
export default App;