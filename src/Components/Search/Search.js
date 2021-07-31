import React, { Component } from "react";
import PropTypes from "prop-types";
import './Search.css'
class Search extends Component {
  state = {
    text: "",
  };
  textHandler = (e) => {
    this.setState({ text: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.onAlert('Please Enter a User Name', 'light');
    } else {
      this.props.onSearchText(this.state.text);
      this.setState({text: ""})
    } 
  };
  render() {
    const { onClearUsers, showUser } = this.props;
    return (
      <>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search User"
            value={this.state.text}
            onChange={this.textHandler}
          />
          <input type="submit" value="Search"></input>
        </form>
        {showUser && (
          <button onClick={onClearUsers}>Clear Users</button>
        )}
      </>
    );
  }
}
Search.propTypes = {
  showUser: PropTypes.bool.isRequired,
  onClearUsers: PropTypes.func.isRequired,
  onSearchText: PropTypes.func.isRequired,
  onAlert: PropTypes.func.isRequired,
};
export default Search;