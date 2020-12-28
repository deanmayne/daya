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
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {/* <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                    <button onClick={this.logoutUser} className="user-auth-button">Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div id="nav-container">
                        <h2 id="nav-header">DAYA</h2>
                        <div id="button-container">
    
                        <Link to={'/signup'}><button className="user-auth-button">Sign Up</button></Link>
                        <Link to={'/login'}><button className="user-auth-button">Log In</button></Link>
                        </div>
                    </div>
                    <div id="img-container">
                        <h1 id="nav-header">the social planner</h1>
                        <img id="splash-img" alt="pic" src="splash_img.jpg" /> 
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div >

                    
                    { this.getLinks()}
                </div>
            </div>
        )
    }
}

export default NavBar;