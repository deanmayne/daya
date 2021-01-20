import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: "login"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      processForm: (user) => dispatch(login(user)),
      login: (user) => dispatch(login(user)),
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm));