import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/application.scss";

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash">
        <div className="splash__right">
          <h1 className="splash__right--header">the social planner</h1>
          <div className="splash__right--description">
            {" "}
            Organize your calendar and easily share it with your friends.{" "}
          </div>
          <Link to={"/signup"} className="button button--sm">
            Sign Up
          </Link>
        </div>
        <img className="splash__image" alt="pic" src="splash3.jpg" />
      </div>
    );
  }
}

export default SplashPage;
