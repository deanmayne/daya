import React from 'react';
import './show.css';
import EventIndexItem from '../events/event_index_item'
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom'
class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      render: 0,
    };

    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    this.props.follow(this.props.match.params.username);
  }
  handleUnfollow() {
    this.props.unfollow(this.props.match.params.username);
  }
  componentDidMount() {
    this.setState({
      events: this.props.userEvents(this.props.match.params.username),
      render: 1,
    });
  }



  render() {
    return (
      <div id="calendar">
        <div id="show-edit">
          <h1 id="nav-header">Calendar</h1>
          {/* <Link to={`${this.props.match.params.username}/follow`}> */}
          <button id="edit-button">
            <div onClick={() => this.handleFollow()} id="button-text">
              Follow
            </div>
          </button>
          <button id="edit-button">
            <div onClick={() => this.handleUnfollow()} id="button-text">
              Unfollow
            </div>
          </button>
          {/* </Link> */}
          {/* <Link></Link> */}
          <button id="edit-button">
            <div id="button-text">Add Event</div>
          </button>
        </div>
        <div id="cal-container">
          <div className="column">
            {" "}
            <h2 className="show-header" id="work-header">
              Work
            </h2>
            {Object.values(this.props.events).map((event) => {
              if (event.category === "work")
                return <EventIndexItem event={event} />;
            })}
          </div>
          <div className="column">
            <div className="column">
              {" "}
              <h2 className="show-header" id="social-header">
                Social
              </h2>
              {Object.values(this.props.events).map((event) => {
                if (event.category === "social")
                  return <EventIndexItem event={event} />;
              })}
            </div>
          </div>
          <div className="column">
            {" "}
            <h2 className="show-header" id="school-header">
              School
            </h2>
            {Object.values(this.props.events).map((event) => {
              if (event.category === "school")
                return <EventIndexItem event={event} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
// }


export default UserShow;