import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Loading from "../Loading/Loading";

const Users = (props) => {
  if(props.loading) {
    return <Loading />
  } else {
return (
      <div style={usersStyle}>
        {props.users.map((users) => {
          return <UserItem key={users.id} users={users} />;
        })}
      </div>
    );
  }
  }
const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1rem',
};

Users.propType = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users;