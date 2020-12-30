import React from "react";
import { withRouter } from "react-router";
import Icon from "../icons/icon";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      username: this.props.currentUser,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
        this.setState({
          [property]: e.target.value,
        });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType !== "Create An Event !") {
      this.setState({
        ["id"]: this.props.history.location.pathname.match(/\d+/)[0],
      });
    }

    const event = Object.assign({}, this.state);
    this.props.processForm(event).then((event) => {
      if (this.props.formType === "Create An Event !") {
        this.props.history.push(`/event/${event.event.id}`);
      }
    });
  }

  render() {
    const { title, category, username } = this.state;


    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <div className="modal__header">
          <h2>{formType}</h2>
          <button
            type="button"
            className="button button--link button--icon"
            onClick={closeModal}
          >
            <Icon icon="cross" className="icon icon--cross" />
          </button>
        </div>
        <div className="form-field">
          <label htmlFor="event-title">Description: </label>
          <textarea
            cols="30"
            rows="10"
            value={title}
            onChange={this.update("title")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="event-location">Location: </label>
          <input
            id="event-location"
            type="text"
            value={location}
            onChange={this.update("location")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="event-category">Category: </label>
          <select id="event-category" onChange={this.update("category")}>
            <option selected disabled></option>
            <option value="jewelry-accessories">Jewelry & Accessories</option>
            <option value="clothing-shoes">Clothing & Shoes</option>
            <option value="home-living">Home & Living</option>
            <option value="wedding-party">Wedding & Party</option>
            <option value="toys-entertainment">Toys & Entertainment</option>
            <option value="arts-collectibles">Arts & Collectibles</option>
            <option value="craft-supplies">Craft Supplies</option>
            <option value="gifts-gift-cards">Gifts & Gift Cards</option>
          </select>
        </div>
        <div className="form-field form-field--radio">
          <label htmlFor="event-shipping">Free Shipping: </label>
          <input
            id="event-shipping--true"
            type="radio"
            value={true}
            checked={free_shipping === "true"}
            onChange={this.update("free_shipping")}
          />
          <label htmlFor="event-shipping--true">True</label>
          <input
            id="event-shipping--false"
            type="radio"
            value={false}
            checked={free_shipping === "false"}
            onChange={this.update("free_shipping")}
          />
          <label htmlFor="event-shipping--false">False</label>
        </div>

        <button
          type="submit"
          className="button button--primary button--block button--lg"
        >
          {formType === "Create An Event !" ? "Create Product" : "Edit Product"}
        </button>
      </form>
    );
  }
}

export default withRouter(EventForm);
