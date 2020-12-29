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
    }

    componentDidMount () {
        this.setState({events: this.props.userEvents(this.props.user.id), render: 1})
    }
    render () {
        debugger
        if (this.state.render === 0 || !this.state.user) {
            return null;
        } else {
        if (!this.props.event) {
            return (
                <div>
                    {/* <NavBarContainer loggedIn={true}/>  */}
                    <h1> make events </h1>
                </div>
            );
        } else {
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
}
}

export default UserShow;