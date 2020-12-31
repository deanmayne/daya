import React from "react";
import { Link } from "react-router-dom";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, category, date, username } = this.props.event;
    const { currentUser } = this.props;
    if (!this.props.event) {
      return null;
    } else {
      return (
        <div className="event" id={category}>
          <div className="event-card">{title}</div>
          <div className="event-card">{date}</div>
          <div className="event-card">{category}</div>
          <Link to={`/calendar/${username}`}>
            <div>{username}</div>
          </Link>
          {username === currentUser.username ? (
            <div>
              <button type="button">Edit</button>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

export default EventIndexItem;
