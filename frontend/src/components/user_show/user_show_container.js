import {connect} from 'react-redux';
import {fetchUserEvents} from '../../actions/event_actions';
import UserShow from './user_show';
import { follow, unfollow } from "../../actions/session_actions";

const mapStateToProps = (state) => {
     return ({
         user: state.session.user,
         events: state.events
     })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      userEvents: (username) => dispatch(fetchUserEvents(username)),
      follow: (username) => dispatch(follow(username)),
      unfollow: (username) => dispatch(unfollow(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)