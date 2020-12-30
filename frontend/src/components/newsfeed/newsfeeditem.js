import React from 'react';



class NewsfeedItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {  }
    }
    render() { 
      // console.log(this.props)
    //   const {event} = this.props.event;
        return (
          <div>
            <br />

            <div>Title: {this.props.event.title}</div>
            <div>Category: {this.props.event.category}</div>
            <div>User: {this.props.event.username}</div>

            <br />
          </div>
        );
    }
}
 
export default NewsfeedItem;