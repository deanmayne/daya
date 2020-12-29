import {connect} from 'react-redux';
import {fetchUserEvents} from '../../actions/event_actions';
import UserShow from './user_show';


export default connect(mapStateToProps, mapDispatchToProps)(UserShow)