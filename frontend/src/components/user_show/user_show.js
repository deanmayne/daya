import React from 'react';
import './show.css';
import NavBarContainer from '../navbar/navbar_container' 

class UserShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            render: 0
        }
        console.log(this.props, this.state)
    }

    componentDidMount () {
        this.setState({events: this.props.userEvents(this.props.user.id), render: 1})
    }
    render () {
            return (
                <div id="calendar">
                    <div id="show-edit">
    
                        <h1 id="nav-header">Calendar</h1>
                        <button id="edit-button"> 
                        <div id="button-text">
                            Edit
                        </div>
                         </button>
                    </div>
                    <div id="cal-container">
                        <div className="column" > <h2 className="show-header" id="work-header">Work</h2>
                            <div className="event" id="work">Event 1</div>
                            <div className="event" id="work">Event 2</div>
                            <div className="event" id="work">Event 3</div>
                        </div>
                        <div className="column" > <h2 className="show-header" id="social-header">Social</h2>
                            <div className="event" id="social" >Event 1</div>
                            <div className="event" id="social">Event 2</div>
                            <div className="event" id="social">Event 3</div>                
                        </div>
                        <div className="column" > <h2 className="show-header" id="school-header">School</h2>
                            <div className="event" id="school">Event 1</div>
                            <div className="event" id="school">Event 2</div>
                            <div className="event" id="school">Event 3</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
// }


export default UserShow;