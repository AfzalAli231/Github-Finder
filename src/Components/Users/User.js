import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';
import { PropTypes } from "prop-types";
import './User.css'

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };
  render() {
    const {
      login,
      avatar_url,
      html_url,
      location,
      hireable,
      followers,
      following,
      blog,
      public_gists,
      public_repos,
      name,
    } = this.props.user;
      const { loading } = this.props;
      if (loading) {
          return <Loading/>
      }
    return (
      <Fragment>
        <div className="container">
          <Link to="/" className="back-line">
            <i className="fas fa-arrow-left"></i> &nbsp;
            <span>Back to the Users</span>
          </Link>
          <div className="card grid-col-2">
            <div className="col-1">
              <img className="img" src={avatar_url} alt="Profile" />
              <h4>Username: {name}</h4>
              <h4 className="Profile">Profile Name: {login}</h4>
              <h4 className="website">Website: {blog}</h4>
              <h4 className="h4">
                Hireable:{" "}
                {hireable ? (
                  <i className="fas fa-check-circle"></i>
                ) : (
                  <i className="fas fa-times-circle"></i>
                )}
              </h4>
              <a target="_blank" className="a" rel='noreferrer' href={html_url}>
                Github Profile
              </a>
            </div>
          </div>
          <div className="card-2">
            <div className="col-2">
              <ul>
                <li>
                  <Link to="" className="followers">
                    Follower: {followers}
                  </Link>
                </li>
                <li>
                  <Link to="" className="following">
                    Following: {following}
                  </Link>
                </li>
                <li>
                  <Link to="" className="public_repos">
                    Public Repos: {public_repos}
                  </Link>
                </li>
                <li>
                  <Link to="" className="public_gists">
                    Public Gists: {public_gists}
                  </Link>
                </li>
                <li>
                  <Link to="" className="location">
                    Location: {location ? location : "none"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
