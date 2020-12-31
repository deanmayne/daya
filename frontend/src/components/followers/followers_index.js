import React from "react";
import { withRouter } from "react-router-dom";
// import "./followers.scss";

class FollowerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, followers } = this.props;

    if(followers.length > 0){
        return (
          <div>
            <div>People You're Following</div>
            {users.map((user) => (
              <Link to={`/calendar/${username}`}>
                {username}
              </Link>
            ))}
          </div>
        );
    }else{
        <div>You're not following anyone !</div>
    }


  }
}

export default withRouter(FollowerIndex);
