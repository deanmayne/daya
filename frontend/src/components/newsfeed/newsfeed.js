import React from "react";
import NewsfeedItem from './newsfeeditem';
import Follow from './follow'


class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchUsers();
    // debugger
  }

  render() {
    console.log(this.props);
    
    // const {following} = this.props.currentUser.following;

    const {events, users} = this.props;

    if (!this.props.currentUser) {
      return null;
    } else {
      if (this.props.currentUser.following.length === 0) {
        return (
          <div>
            <div>Suggested People to Follow:</div>
                {users.map(user => {
                  return <Follow user={user} key={user._id}/>
                })}
          </div>
        );
      } else {
        return (
            <div>
                <div>your followers stuff </div>
                {events.map(event => {

                  if (this.props.currentUser.following.includes(event.user)){
                    return <NewsfeedItem key={event._id} event={event} />
                  }
                    
                })}

            </div>
            
        );
      }
    }
  }
}

export default Newsfeed;
