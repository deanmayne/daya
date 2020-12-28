import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import EventsIndex from "./events_index";

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.events.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
