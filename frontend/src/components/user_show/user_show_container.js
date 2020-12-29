import {connect} from 'react-redux';
import {fetchUserEvents} from '../../actions/event_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => {
     return ({
         user: state.session.user
     })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return({
        userEvents: (ownProps.match.params.user_id)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)