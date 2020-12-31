import React from 'react';
import './show.css';
import EventIndexItem from '../events/event_index_item'
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom'
import Buttons from './buttons';


class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      render: 0,
    };
  }

  componentDidMount(){
    this.props.fetchEvents()
  }

  render() {
    return (
      <div id="calendar">
        <div id="show-edit">
          <h1 id="nav-header">Calendar</h1>
          <Buttons user={this.props.currentUser} params={this.props.match.params} 
          follow={this.props.follow} unfollow={this.props.unfollow} 
          history={this.props.history}/>
        </div>
        <div id="cal-container">
          <div className="column">
            {" "}
            <h2 className="show-header" id="work-header">
              Work
            </h2>
            {Object.values(this.props.events).map((event) => {
              if (
                event.category === "work" &&
                event.username === this.props.match.params.username
              )
                return <EventIndexItem event={event} currentUser = {this.props.currentUser} />;
            })}
          </div>
          <div className="column">
            <div className="column">
              {" "}
              <h2 className="show-header" id="social-header">
                Social
              </h2>
              {Object.values(this.props.events).map((event) => {
                if (event.category === "social" && event.username === this.props.match.params.username)
                  return <EventIndexItem event={event} currentUser = {this.props.currentUser}  />;
              })}
            </div>
          </div>
          <div className="column">
            {" "}
            <h2 className="show-header" id="school-header">
              School
            </h2>
            {Object.values(this.props.events).map((event) => {
              if (
                event.category === "school" &&
                event.username === this.props.match.params.username
              )
                return <EventIndexItem event={event} currentUser={this.props.currentUser} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
// }


export default UserShow;