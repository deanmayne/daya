import React from "react";
import EventIndexItem from '../events/event_index_item'
import Follow from "./follow";

class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = this.props.loaded;
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchUsers();
    this.loaded = true;
  }

  render() {

    const { events, users, currentUser } = this.props;
    if (!this.loaded || currentUser.following === undefined ) {
      return null;
    } else {
      if (currentUser.following.length === 0) {
        return (
          <div>
            <div>Suggested People to Follow:</div>
            {users.map((user) => {
              return <Follow user={user} key={user._id} />;
            })}
          </div>
        );
      } else {
        // console.log(this.props)
        // debugger
          return (
            <div>
              <div id="newsfeed-container"> 
                <h1>{this.props.currentUser.username}'s newsfeed</h1>
              <div>Following {this.props.currentUser.following.length} People</div>
              <br />
              <div> 
                <h2>Upcoming Events </h2>

                {events.map((event) => {
                  if (currentUser.following.includes(event.user_id)) {
                    return <EventIndexItem key={event._id} event={event} />;
                  }
                })}
              </div>
              </div>
            </div>
          );
      }
    }
  }
}

export default Newsfeed;
