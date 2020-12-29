import React from 'react';
import './show.css' 

class UserShow extends React.Component {
    render () {
        return (
            <div>
                <div id="show-edit">

                    <h1 id="nav-header">User Show</h1>
                    <button id="edit-button"> 
                    <div id="button-text">
                        Edit
                    </div>
                     </button>
                </div>
                <div id="cal-container">
                    <div className="column"> <h2 id="show-header">Work</h2>
                        <div className="event">Event 1</div>
                        <div className="event">Event 2</div>
                        <div className="event">Event 3</div>
                    </div>
                    <div className="column"> <h2 id="show-header" >Social</h2>
                        <div className="event" >Event 1</div>
                        <div className="event">Event 2</div>
                        <div className="event">Event 3</div>                
                    </div>
                    <div className="column"> <h2 id="show-header">School</h2>
                        <div className="event">Event 1</div>
                        <div className="event">Event 2</div>
                        <div className="event">Event 3</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserShow;