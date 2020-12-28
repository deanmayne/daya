import React from "react";
import { withRouter } from "react-router-dom";
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newState) {
    this.setState({ events: newState.events });
  }

  render() {
    if (this.state.events.length === 0) {
      return <div>No events found ! Go add some !</div>;
    } else {
      return (
        <div>
          <h2>Events</h2>
          {this.state.events.map((event) => (
            <EventIndexItem key={event._id} event={event} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(EventIndex);
