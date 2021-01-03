import React from "react";
import { withRouter } from "react-router-dom";
import "./login.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.demoUser = this.demoUser.bind(this);

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.setState({ user: nextProps.currentUser });
    }

    this.setState({ errors: nextProps.errors });
  }

  demoUser(e) {
    e.preventDefault();
    let DemoUser = {
      username: 'DemoUser', 
      password: 'password'
    }
    this.props
      .login(DemoUser)
      .then(() => this.props.history.push("/newsfeed"));
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

    this.props.signup(user).then(() => this.props.history.push("/newsfeed"));
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
      <div className="login-container">
        <div className="li-img-container"></div>
        <form className="login-signup" onSubmit={this.handleSubmit}>
          <div className="login">Sign Up</div>
          <div className="login-form">
            <input
              className="input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <br />
            <input
              className="input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <button className="continue" type="submit">
              Continue
            </button>
            <br />
            <button className="continue" type="submit" onClick={this.demoUser}>
              Demo User Login
            </button>

            {this.renderErrors()}
          </div>
        </form>
        <div className="li-img-container" id="container2"></div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
