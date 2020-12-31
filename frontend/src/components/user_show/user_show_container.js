import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/event_actions';
import UserShow from './user_show';
import { follow, unfollow } from "../../actions/session_actions";

const mapStateToProps = (state) => {
     return ({
         currentUser: state.session.user,
         events: state.events
     })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchEvents: () => dispatch(fetchEvents()),
      follow: (username) => dispatch(follow(username)),
      unfollow: (username) => dispatch(unfollow(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)