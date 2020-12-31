import {connect} from 'react-redux';
import SuggestedFollows from './suggested_follows';
import { fetchEvents } from '../../actions/event_actions'
import { fetchUsers } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return ({
        users: Object.values(state.users),
        currentUser: state.session.user
    })
}

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         fetchEvents: () => dispatch(fetchEvents()),
//         fetchUsers: () => dispatch(fetchUsers())
//     })
// }

export default connect(mapStateToProps, null)(SuggestedFollows)