import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    }


    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div id="nav-container">

                    <div id="logo-container">

                        <img id="logo" alt="pic" src="sunlogo.png" />
                        <Link to="/newsfeed"><h1 id="nav-header">DAYA </h1></Link>
                        <div id="nav-links">

                            <Link to={`/calendar/${this.props.user.username}`}><div id="nav-link"> My Calendar</div></Link>
                            <Link to={`/suggestedfollows`}><div id="nav-link"> Suggested Follows</div></Link>
                        </div>
                    </div>
                    <div id="button-container">
                        <button id="edit-button" onClick={this.logoutUser} className="user-auth-button">Logout</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div id="nav-container">
                        <div id="logo-container">

                            <img id="logo" alt="pic" src="sunlogo.png" />
                            <Link to="/"><h1 id="nav-header">DAYA </h1></Link>
                        </div>
                        <div id="button-container">
    
                        <Link to={'/login'}><button className="user-auth-button" id="login"><div>Log In</div></button></Link>
                        <Link to={'/signup'}><button className="user-auth-button" id="edit-button">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>             
                    { this.getLinks()}
            </div>
        )
    }
}

export default NavBar;