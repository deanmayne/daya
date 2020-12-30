import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateEvent } from "../../actions/event_actions";
import EventForm from "./event_form";
// import { removeErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  formType: "Update An Event !",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (event) => dispatch(createEvent(event)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventForm)
);
