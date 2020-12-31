import React from "react";
import {Link} from 'react-router-dom'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { title, category, date } = this.props.event;
    return (
      <div className="event" id={category}>
        <div className="event-card">{title}</div>
        <div className="event-card">{date}</div>
        <div className="event-card">{category}</div>
        <Link to={`/calendar/${this.props.event.username}`}><div>{this.props.event.username}</div></Link>
      </div>
    );
  }
}

export default EventIndexItem;
