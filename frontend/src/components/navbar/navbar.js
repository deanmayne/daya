import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/application.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  // Selectively render links dependent on whether the user is logged in
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar">
          <div className="logo-container">
            <img
              className="logo-container__image"
              alt="pic"
              src="sunlogo.png"
            />
            <Link to="/newsfeed">
              <h1 className="logo-container__title">DAYA </h1>
            </Link>
            <Link to={`/newsfeed`} className="logo-container__link">
              Newsfeed
            </Link>
            <Link
              to={`/calendar/${this.props.user.username}`}
              className="logo-container__link"
            >

              My Calendar
            </Link>
            <Link to={`/suggestedfollows`}
              className="logo-container__link"> Suggested Follows
            </Link>
          </div>
          <div className="button-container">
            <button className="button button--sm" onClick={this.logoutUser}>
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="logo-container">
            <img
              className="logo-container__image"
              alt="pic"
              src="sunlogo.png"
            />
            <Link to="/">
              <h1 className="logo-container__title">DAYA </h1>
            </Link>
          </div>
          <div className="buttons">
            <Link to={"/login"} className="button button--sm">
              {" "}
              Log In
            </Link>
            <Link to={"/signup"} className="button button--sm">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default NavBar;
