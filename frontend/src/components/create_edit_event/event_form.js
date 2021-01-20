import React from "react";
import { withRouter } from "react-router";
import "../../stylesheets/application.scss";

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
      event = Object.assign({}, this.state, { id: this.props.match.params.id });
    } else {
      event = Object.assign({}, this.state);
    }
    this.props.processForm(event).then((event) => {
      this.props.history.push(`/calendar/${this.props.currentUser}/`);
    });
  }

  render() {
    const { title } = this.state;
    const { formType } = this.props;

    const formPhoto = () => {
      if (this.props.formType === "Create An Event !") {
        return (
          <div className="form-img-container">
            <img className="form-img" alt="pic" src="create_event.jpg" />
          </div>
        );
      } else {
        return (
          <div className="form-img-container">
            <img className="form-img" alt="pic" src="create_event.jpg" />
          </div>
        );
      }
    };

    return (
      <div className="form-container gradient-border">
        <form className="event-form" onSubmit={this.handleSubmit}>
          <div className="event-form__header">
            <h2>{formType}</h2>
          </div>
          <div className="event-form__field">
            <label htmlFor="event-form__title">
              <h3>Title:</h3>
            </label>
            <textarea
              cols="30"
              rows="10"
              value={title}
              onChange={this.update("title")}
            />
          </div>
          <div className="event-form__field">
            <label htmlFor="event-form__field--category">
              <h3>Category:</h3>
            </label>
            <select
              id="event-form__field--category"
              className="event-form__field--category"
              onChange={this.update("category")}
            >
              <option selected disabled>
                Please Select
              </option>
              <option value="work">Work</option>
              <option value="social">Social</option>
              <option value="school">School</option>
            </select>
          </div>
          <div className="event-form__field">
            <label htmlFor="event-form__field--date">
              <h3>Event Date:</h3>
            </label>
            <input
              type="date"
              id="event-form__field--date"
              className="event-form__field--date"
              onChange={this.update("date")}
            />
          </div>

          <button type="submit" className="button button--sm">
            {formType === "Create An Event !" ? "Create Event" : "Edit Event"}
          </button>
        </form>
        {formPhoto()}
      </div>
    );
  }
}

export default withRouter(EventForm);
