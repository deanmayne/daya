import React from 'react';
import {Link} from 'react-router-dom'
import '../suggested_follows/follow.scss'


class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    pickColor() {
      if (this.props.color % 3 === 0) {
        return 'color-3'
      } else if (this.props.color % 3 === 1) {
        return "color-1"
      } else { 
        return "color-2"
      }
    }
    render() { 
        return (
          <div className="follow-card" id={this.pickcolor}>
            <div>
              <h3>Username: <Link id="user-link" to={`/calendar/${this.props.user.username}`}>{this.props.user.username}</Link></h3> 
            </div>
            <div id="follow-text">Following: {this.props.user.following.length} </div>
            <br />
          </div>
        );
    }
}
 
export default Follow;