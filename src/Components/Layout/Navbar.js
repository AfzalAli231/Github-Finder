import React from 'react';
import PropTypes from 'prop-types'
import './Navbar.css';

const Navbar = (props) => {
    return (
      <nav className="navbar">
        <div className="container">
          <h1>
            <i className={props.icon}></i> {props.title}
          </h1>
        </div>
      </nav>
    );
  }
Navbar.defaultProps = {
    title: "Github Finder App",
    icon: "fab fa-github",
  };
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
export default Navbar;