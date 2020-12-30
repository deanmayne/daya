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
              Username:
              <Link to={`/calendar/${this.props.user.username}`}>{this.props.user.username}</Link>
            </div>
            <div>Following: {this.props.user.following.length} people</div>

            <br />
          </div>
        );
    }
}
 
export default Follow;