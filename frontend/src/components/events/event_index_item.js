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

    const newDate = date.split("T")[0].split("-")
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
    };

    if (!this.props.event) {
      return null;
    } else {
      return (
        <Link id="event-link" to={`/calendar/${username}`}>

        <div className="event" id={category}>
          <h3 className="event-card" id="event-header">{title}</h3>
          <div className="event-card">{newDate()}</div>
          <div className="event-card">{category}</div>
            <div className="event-card">{username}</div>
          {username === currentUser.username ? (
            <div id="event-buttons">
              
              <Link id="event-edit"to={"/editEvent/" + _id}>Edit </Link>
              <button type="button" id="event-delete" onClick={() => this.props.delete(_id)}>Delete </button>
            </div>
          ) : null}
        </div>
        </Link>
      );
    }
  }
}

export default EventIndexItem;
