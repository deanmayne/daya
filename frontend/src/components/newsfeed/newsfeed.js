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
              <div>{this.props.currentUser.username}'s newsfeed</div>
              <div>Following {this.props.currentUser.following.length} People</div>
              <br />
              <div>Upcoming Events </div>
              {events.map((event) => {
                if (currentUser.following.includes(event.user_id)) {
                  return <EventIndexItem key={event._id} event={event} />;
                }
              })}
            </div>
          );
      }
    }
  }
}

export default Newsfeed;
