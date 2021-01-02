import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import FollowersIndex from "./followers_index";

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
    followers: state.session.user.following,
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowersIndex);
