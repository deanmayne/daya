import React from "react";

class EventIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

  render() {

    const {title, category, date} = this.props.event;
    return (
      <div className="event" id={category}>
          <div className="event-card">{title}</div>
          <div className="event-card">{date}</div>
          <div className="event-card">{category}</div>
      </div>
    );
  }
}

export default EventIndexItem;
