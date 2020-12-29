import {connect} from 'react-redux'
import {fetchEvents} from '../../actions/event_actions'
import Newsfeed from './newsfeed'

const mapStateToProps = (state) => {
    return ({
       currentUser: state.session.user
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchEvents: () => dispatch(fetchEvents())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)