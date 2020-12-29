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
            {this.props.event.title}
            {this.props.event.category}
            {this.props.event.username}
          </div>
        );
    }
}
 
export default NewsfeedItem;