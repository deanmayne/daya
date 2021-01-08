import React from "react";
import { withRouter } from "react-router-dom";
import Follow from '../newsfeed/follow'

class FollowerIndex extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { followers } = this.props;
    
 
    const followItem = () => {
      let color = 0;
      return this.props.users.map((user) => {
        if (this.props.followers.includes(user._id)) {

          color += 1;
          return (<Follow user={user} color={color} key={user._id} events={this.props.events} />)
        };
        return null;
      })
    }
    if (followers.length > 0) {
      return (
        <div>
          <h2 id="header2">People You're Following</h2>

          {followItem()}
        </div>
      );
    } else {
      <div>You're not following anyone !</div>;
    }
  }
}

export default withRouter(FollowerIndex);
