import React from "react";

class EventIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

  render() {

    const {title, category, date} = this.props.event;
    return (
      <div className="event-card">
          <h1 className="event-card__title">{title}</h1>
          <h1 className="event-card__category">{category}</h1>
          <h1 className="event-card__date">{date}</h1>
      </div>
    );
  }
}

export default EventIndexItem;
