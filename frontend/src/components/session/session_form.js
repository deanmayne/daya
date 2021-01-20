import React from "react";
import { withRouter } from "react-router-dom";
import "../../stylesheets/application.scss";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  demoUser(e) {
    e.preventDefault();
    let DemoUser = {
      username: "DemoUser",
      password: "password",
    };
    this.props.login(DemoUser).then(() => this.props.history.push("/newsfeed"));
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.processForm(user).then(() => this.props.history.push("/newsfeed"));
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="session-form__title">{this.props.formType === "login" ? "Log In" : "Sign Up"}</div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <button className="button button--lg" type="submit">
              Continue
            </button>
            <button
              className="button button--lg"
              type="submit"
              onClick={this.demoUser}
            >
              Demo User Login
            </button>

            {!this.props.errors==={} ? this.renderErrors() :  null}

        </form>
    );
  }
}

export default withRouter(SessionForm);
