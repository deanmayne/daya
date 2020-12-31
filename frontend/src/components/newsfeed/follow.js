import React from 'react';
import {Link} from 'react-router-dom'


class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div>
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