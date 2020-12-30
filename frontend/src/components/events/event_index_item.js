import React from "react";

class EventIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

  render() {
    
    const {title, category, date} = this.props.event;
    return (
      <div className="event-card">
          <div className="event-card__title">{title}</div>
          <div className="event-card__category">{category}</div>
          <div className="event-card__date">{date}</div>
      </div>
    );
  }
}

export default EventIndexItem;
