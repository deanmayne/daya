import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import FollowersIndex from "./followers_index";

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
<<<<<<< HEAD
    followers: state.session.user.following, 
=======
    followers: state.session.user.following,
>>>>>>> eb84174b1a0a4bd4ac5f2d439b9a257b5b5cd389
    events: Object.values(state.events)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowersIndex);
