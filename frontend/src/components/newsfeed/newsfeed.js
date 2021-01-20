import React from "react";
import EventIndexItem from '../events/event_index_item'
import SuggestedFollows from "../suggested_follows/suggested_follows_container";
import FollowersIndex from "../followers/followers_container";
import "../../stylesheets/application.scss";


class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
    this.loaded = this.props.loaded;
  }

  componentDidMount() {
    
    this.props.fetchEvents();
    this.props.fetchUsers();
    this.loaded = true;
  }

  render() {

    const { events, currentUser } = this.props;
    if (!this.loaded || currentUser.following === undefined || !events) {
      return null;
    } else {
      if (currentUser.following.length === 0) {
        return (
          <SuggestedFollows events={events}/>
        );
      } else {
          return (
            <div>
              <div id="logo-header">

                <h1 id="header1">{this.props.currentUser.username}'s newsfeed</h1>
                <img id="header-logo" alt="pic" src="newsfeed.png" />
                
              </div>

              <div id="newsfeed-container"> 
              <div id='newsfeed-events'>
                  <h2 id="header2">Upcoming Events </h2>

                {events.map((event) => {
                    const date = new Date().toISOString()
                  if (currentUser.following.includes(event.user_id) && event.date > date) {
                    return <EventIndexItem key={event._id} event={event} currentUser={this.props.currentUser} />;
                  }
                  return null;
                })}
              </div>
                <div id="newsfeed-following">  
                  <FollowersIndex />
                </div>
              </div>
            </div>
          );
      }
    }
  }
}

export default Newsfeed;
