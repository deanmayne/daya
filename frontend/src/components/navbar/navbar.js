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
                <div>
                    {/* <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                    <Link to={`/calendar/${this.state.user.id}`}>My Calendar</Link>
                    <Link to="/newsfeed"><h2 id="nav-header">DAYA</h2></Link>
                    <button onClick={this.logoutUser} className="user-auth-button">Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div id="nav-container">
                        <Link to="/"><h1 id="nav-header">DAYA</h1></Link>
                    
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