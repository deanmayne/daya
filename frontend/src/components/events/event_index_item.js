import React from "react";
import {Link} from 'react-router-dom'
import '../newsfeed/newsfeed.scss'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { title, category, date } = this.props.event;
    return (
      // <div>

        <Link to={`/calendar/${this.props.event.username}`}>
          <div className="event" id={category}>
            <h3 id="event-header">Event title: {title}</h3>
            <div className="event-card"> Event date: {date}</div>
            <div className="event-card">Event category: {category}</div>
            <div>Event owner: {this.props.event.username}</div>
        </div>
        </Link>
      );
  }
}

export default EventIndexItem;
