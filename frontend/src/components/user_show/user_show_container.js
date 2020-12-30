import {connect} from 'react-redux';
import {fetchUserEvents} from '../../actions/event_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => {
     return ({
         user: state.session.user,
         events: state.events
     })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        userEvents: username => dispatch(fetchUserEvents(username))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)