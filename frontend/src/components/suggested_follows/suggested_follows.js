import React from 'react';
import Follow from '../newsfeed/follow'

class SuggestedFollows extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { color: 0 }
    }

    followItem () {
        let color = 0;
        this.props.users.map((user) => {
            if (!this.props.followers.includes(user._id)) {
                // this.setState({ color: this.state.color + 1 })
                color += 1;
                return (<Follow user={user} color={color} key={user._id} />)
            };
        }) 
    }
    
    render() {
        return (
            <div>
                <h1 id="nav-header">Suggested People to Follow</h1>
                <div>
                    {this.folowItem}
                </div>
            </div>
        );
    }
}

export default SuggestedFollows;