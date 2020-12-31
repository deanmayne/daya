import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Follow from '../newsfeed/follow'
// import "./followers.scss";

class FollowerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, followers } = this.props;
    console.log(this.props)

    if (followers.length > 0) {
      return (
        <div>
          <h2>People You're Following</h2>
          {users.map((user) => {
              // debugger
            if(followers.includes(user._id)) {
            
              return  <Follow user={user}/>
        
            }
         } )}
        </div>
      );
    } else {
      <div>You're not following anyone !</div>;
    }
  }
}

export default withRouter(FollowerIndex);
