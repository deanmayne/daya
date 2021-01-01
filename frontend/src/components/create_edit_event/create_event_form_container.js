import { connect } from "react-redux";
import { withRouter } from "react-router";
import { composeEvent } from "../../actions/event_actions";
import EventForm from "./event_form";


const mapStateToProps = (state) => ({
  currentUser: state.session.user.username,
  formType: "Create An Event !",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (event) => dispatch(composeEvent(event)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventForm)
);
