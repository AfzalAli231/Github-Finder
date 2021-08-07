import React from 'react'
import "./Alert.css";

export default function Alert(props) {
  const {onAlert, cancelHandler} = props;
    return (
      onAlert !== null && (
        <div className="alert">
          <i className="fas fa-info-circle"></i> {onAlert.msg}
          <i onClick={cancelHandler} className="fas cancel fa-times-circle"></i>
        </div>
      )
    );
}
