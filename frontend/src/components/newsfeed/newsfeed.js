import React from 'react';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>Hello</div>
         );
    }
}
 
export default Newsfeed;