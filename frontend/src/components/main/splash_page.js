import React from 'react';
import EventIndexContainer from '../events/events_index_container';
import NavBar from '../navbar/navbar_container'
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {


    render() {
        return (
            <div>
                <div id="img-container">
                    <div id="header-container">
                        <h1 id="nav-header">the social planner</h1>
                        <text id="splash-description"> Organize your calendar and easily share it with your friends. </text>
                        <Link to={'/signup'}><button className="user-auth-button" id="edit-button">Sign Up</button></Link>

                    </div>
                    <img id="splash-img" alt="pic" src="splash_img.jpg" />
                </div>
            </div>
            // </div>
        );
    }
}

export default SplashPage;