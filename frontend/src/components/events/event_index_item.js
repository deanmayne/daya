import React from "react";
import { Link } from "react-router-dom";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, title, category, date, username } = this.props.event;
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
            {username}
          </Link>
          {username === currentUser.username ? (
            <Link to ={"/editEvent/"+_id}>Edit</Link>
              
          ) : null}
        </div>
      );
    }
  }
}

export default EventIndexItem;
