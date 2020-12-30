import React from "react";
import NewsfeedItem from "./newsfeeditem";
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
    if (!this.loaded || currentUser === {}) {
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
        if (currentUser.following.length === 0) {
          return <div>You're not following anyone here are suggestions:</div>;
        } else {
          return (
            <div>
              <div>your followers stuff </div>
              {events.map((event) => {
                if (currentUser.following.includes(event.user)) {
                  return <NewsfeedItem key={event._id} event={event} />;
                }
              })}
            </div>
          );
        }
      }
    }
  }
}

export default Newsfeed;
