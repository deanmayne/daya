import React from 'react';
import Follow from '../newsfeed/follow'

class SuggestedFollows extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { color: 0 }
    }
    
    render() {
        
        const followItem = () => {
            let color = 0;
            return this.props.users.map((user) => {
                if (!this.props.followers.includes(user._id)) {
                    // this.setState({ color: this.state.color + 1 })
                    color += 1;
                    return (<Follow user={user} color={color} key={user._id} />)
                };
            }) 
        }
        
        return (
            <div>
                <h1 id="nav-header">Suggested People to Follow <img id="cal-logo" alt="pic" src="add-group.png" /></h1>
                <div>
                    {followItem()}
                </div>
            </div>
        );
    }
}

export default SuggestedFollows;