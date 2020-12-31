import React from 'react';
import EventIndexContainer from '../events/events_index_container';
import NavBar from '../navbar/navbar_container'
import {Link} from 'react-router-dom'

class SplashPage extends React.Component {


    render() {
        return (
            <div>
                <div id="img-container">
                    <div id="header-container">
                        <div id="header-content">

                            <h1 id="splash-header">the social planner</h1>
                            <div id="splash-description"> Organize your calendar and easily share it with your friends. </div>
                            <Link to={'/signup'}><button className="user-auth-button" id="edit-button">Sign Up</button></Link>
                        </div>

                    </div>
                    <img id="splash-img" alt="pic" src="splash3.jpg" />
                    {/* add multiple photos here */}
                </div>
            </div>
            // </div>
        );
    }
}

export default SplashPage;