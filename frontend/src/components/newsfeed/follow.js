import React from 'react';
import {Link} from 'react-router-dom'
import '../suggested_follows/follow.scss'


class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
      const pickColor = () => {
        if (this.props.color % 3 === 0) {
          return 'color-3'
        } else if (this.props.color % 3 === 1) {
          return "color-1"
        } else { 
          return "color-2"
        }
      }
        return (
          <Link to={`/calendar/${this.props.user.username}`}>
            <div className="follow-card" id={pickColor()}>
              <div>
                <h3 id="event-header">Username: {this.props.user.username}</h3> 
              </div>
              <div id="follow-text">Following: {this.props.user.following.length} </div>
            </div>
          </Link>
        );
    }
}
 
export default Follow;

// 12.31.2020
  // sort by year, then month, then date
// 8:00 pm