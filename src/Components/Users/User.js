import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import UserItem from "./UserItem";

const User = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);
  

  if(loading) {
    return <Loading />;
  }

    return (
      <div style={userStyle}>
        {props.users.map((user) => {
          return <UserItem key={user.id} users={user} />;
        })}
      </div>
    );
  }
const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '1rem',
};
export default User;