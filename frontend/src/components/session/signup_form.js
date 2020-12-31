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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.setState({ user: nextProps.currentUser });
      // this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
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
      password2: this.state.password2,
    };

    this.props.signup(user).then((user) => {
      this.props.login(user).then(() => this.props.history.push("/newsfeed"));
    });
  }

  renderErrors() {
    ;
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
                    <div className="li-img-container">

                    {/* <img id="login1" alt="pic" src="login2.jpg"/> */}
                </div>
                <form className="login-signup"onSubmit={this.handleSubmit}>
                    <div className="login">Sign Up</div>
                    <div className="login-form">
                        <input className="input" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br />
                        <input className="input" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <button className="continue" type="submit">Continue</button>
                        {/* <input type="submit" value="Submit" /> */}
                        {this.renderErrors()}
                    </div>
                </form>
                <div className="li-img-container" id="container2">

                    {/* <img id="login2" alt="pic" src="login3.jpg" /> */}
                </div>
            </div >
    );
  }
}

export default withRouter(SignupForm);
