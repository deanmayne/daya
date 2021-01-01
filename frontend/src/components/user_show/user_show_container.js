import {connect} from 'react-redux';
import { fetchEvents, deleteAnEvent } from "../../actions/event_actions";
import {fetchUsers} from '../../actions/session_actions';
import UserShow from './user_show';
import { follow, unfollow } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
     return ({
         currentUser: state.session.user,
         events: state.events,
         users: Object.values(state.users)
     })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchEvents: () => dispatch(fetchEvents()),
      fetchUsers: () => dispatch(fetchUsers()),
      follow: (username) => dispatch(follow(username)),
      unfollow: (username) => dispatch(unfollow(username)), 
      delete: (eventId) => dispatch(deleteAnEvent(eventId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)