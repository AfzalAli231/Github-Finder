import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import './Navbar.css';

const Navbar = (props) => {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="flex">
            <h1>
              <i className={props.icon}></i> {props.title}
            </h1>

            <ul className="ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

          </div>
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