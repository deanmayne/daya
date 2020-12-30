import {connect} from 'react-redux'
import {fetchEvents} from '../../actions/event_actions'
import {fetchUsers} from '../../actions/session_actions'
import Newsfeed from './newsfeed'

const mapStateToProps = (state) => {
    return ({
       currentUser: state.session.user,
       events: Object.values(state.events),
       users: Object.values(state.users),
       loaded: false
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchEvents: () => dispatch(fetchEvents()), 
        fetchUsers: () => dispatch(fetchUsers())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)