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
    const followItem = () => {
      let color = 0;
      return this.props.users.map((user) => {
        if (this.props.followers.includes(user._id)) {
          // this.setState({ color: this.state.color + 1 })
          color += 1;
          return (<Follow user={user} color={color} key={user._id} />)
        };
      })
    }
    if (followers.length > 0) {
      return (
        <div>
          <h2>People You're Following</h2>

          {followItem()}
        </div>
      );
    } else {
      <div>You're not following anyone !</div>;
    }
  }
}

export default withRouter(FollowerIndex);
