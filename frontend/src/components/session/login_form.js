import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // componentDidMount() {

    // }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.setState( {user: nextProps.currentUser})
             //come back to this
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };
        
        this.props.login(user).then(() =>
        this.props.history.push('/newsfeed'));
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-container">
                <div className="li-img-container">

                    <img id="login1" alt="pic" src="login2.jpg"/>
                </div>
                <form className="login-signup"onSubmit={this.handleSubmit}>
                    <div className="login">Log in</div>
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

                    <img id="login2" alt="pic" src="login3.jpg" />
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);