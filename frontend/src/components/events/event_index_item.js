import React from "react";
import {Link} from 'react-router-dom'
import '../newsfeed/newsfeed.scss'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, title, category, date, username } = this.props.event;
    const { currentUser } = this.props;

    const newDate = () => {
      const newDate = new Date(date);
      return (
        newDate.getMonth() +
        1 +
        "/" +
        newDate.getDate() +
        "/" +
        newDate.getFullYear()
      );
    };

    if (!this.props.event) {
      return null;
    } else {
      return (
        <div className="event" id={category}>
          <Link id="event-link" to={`/calendar/${username}`}>
            <h3 id="event-header">{title}</h3> 
            <div className="event-card">{newDate()}</div>
            <div className="event-card">{category}</div>
            <div className="event-card">{username}</div>
            {username === currentUser.username ? (
              <Link to={"/editEvent/" + _id}>Edit</Link>
            ) : null}
        </Link>
          </div>
      );
    }
  }
}

export default EventIndexItem;
