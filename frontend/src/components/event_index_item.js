import React from "react";

class EventIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

  render() {

    const {title, category, date} = this.props.event;
    return (
      <div>
          <h1>{title}</h1>
          <h1>{category}</h1>
          <h1>{date}</h1>
      </div>
    );
  }
}

export default EventIndexItem;
