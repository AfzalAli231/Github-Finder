import React from 'react'
import "./Alert.css";

export default function Alert(props) {
    return (
      props.onAlert !== null && (
        <div className="alert">
          <i className="fas fa-info-circle"></i> {props.onAlert.msg}
        </div>
      )
    );
}
