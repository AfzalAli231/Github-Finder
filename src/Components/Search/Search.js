import React, { useState } from "react";
import PropTypes from "prop-types";
import './Search.css'
function Search(props) {

  const [text, setText] = useState("")
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      props.onAlert('Please Enter a User Name', 'light');
    } else {
      props.onSearchText(text);
      setText("");
    } 
  };
    const { onClearUsers, showUser } = props;
    return (
      <>
        <form className="form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search User"
            value={text}
            onChange={textHandler}
          />
          <input type="submit" value="Search"></input>
        </form>
        {showUser && (
          <button onClick={onClearUsers}>Clear Users</button>
        )}
      </>
    );
  }
Search.propTypes = {
  showUser: PropTypes.bool.isRequired,
  onClearUsers: PropTypes.func.isRequired,
  onSearchText: PropTypes.func.isRequired,
  onAlert: PropTypes.func.isRequired,
};
export default Search;