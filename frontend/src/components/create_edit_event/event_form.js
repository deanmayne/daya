import React from "react";
import { withRouter } from "react-router";
import './event_form.scss';
// import Icon from "../icons/icon";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      date: "",
      username: this.props.currentUser,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    if (property === "date") {
      return (e) => {
        let date = new Date(e.target.value).toISOString();
        this.setState({
          [property]: date,
        });
      };
    } else {
      return (e) => {
        this.setState({
          [property]: e.target.value,
        });
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
        let event;
      if (this.props.formType === "Update An Event !") {

     event = Object.assign({}, this.state, {id: this.props.match.params.id});
          
      }else{
           event = Object.assign({}, this.state);
      }
    this.props.processForm(event).then((event) => {

        this.props.history.push(`/calendar/${this.props.currentUser}/`);
    });
  }

  render() {
    const { title, category, username } = this.state;
    const { formType } = this.props;

    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <div className="header">
          <h2>{formType}</h2>
        </div>
        <div className="form-field">
          <label htmlFor="event-title"><h3>Title:</h3></label>
          <textarea
            cols="30"
            rows="10"
            value={title}
            onChange={this.update("title")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="event-category"><h3>Category:</h3></label>
          <select id="event-category" onChange={this.update("category")}>
            <option selected disabled>Please Select</option>
            <option value="work">Work</option>
            <option value="social">Social</option>
            <option value="school">School</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="event-date"><h3>Event Date:</h3></label>
          <input type="date" id="event-date" onChange={this.update("date")} />
        </div>

        <button
          type="submit"
          className="event-button"
        >
          {formType === "Create An Event !" ? "Create Event" : "Edit Event"}
        </button>
      </form>
    );
  }
}

export default withRouter(EventForm);
