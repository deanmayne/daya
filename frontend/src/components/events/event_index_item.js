import React from "react";
import {Link} from 'react-router-dom'
import '../newsfeed/newsfeed.scss'

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){

  }

  render() {
    const { _id, title, category, date, username } = this.props.event;
    const { currentUser } = this.props;

    const newDate = () => {
      const newDate = date.split('T')[0].split('-')
      return (
        `${newDate[1]}/${newDate[2]}/${newDate[0]}`
      )
    };

    if (!this.props.event) {
      return null;
    } else {
      return (
        <div className="event" id={category}>
          <div className="event-card">{title}</div>
          <div className="event-card">{newDate()}</div>
          <div className="event-card">{category}</div>
          <Link to={`/calendar/${username}`}>{username}</Link>
          {username === currentUser.username ? (
            <div>
              
              <Link to={"/editEvent/" + _id}>Edit</Link>
              <button type="button" onClick={() => this.props.delete(_id)}>Delete</button>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

export default EventIndexItem;
