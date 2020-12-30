import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createEvent } from "../../actions/event_actions";
import EventForm from "./event_form";
import { removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.user.username,
  formType: "Create An Event !",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (event) => dispatch(createEvent(event)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventForm)
);
