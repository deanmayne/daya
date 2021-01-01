import React from 'react';
import Follow from '../newsfeed/follow'

class SuggestedFollows extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { color: 0 }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchEvents();
    }
    
    render() {
        
        const followItem = () => {
            let color = 0;
            return this.props.users.map((user) => {
                if (!this.props.followers.includes(user._id)) {
                    // this.setState({ color: this.state.color + 1 })
                    color += 1;
                    return (<Follow user={user} color={color} key={user._id} events={this.props.events} />)
                };
            }) 
        }
        if (!this.props.users || !this.props.events) {
            return null;
        } else {

            return (
                <div>
                    <div id="logo-header">

                        <h1 id="nav-header">Suggested People to Follow </h1>
                        <img id="header-logo" alt="pic" src="add-group.png" />

                    </div>
                    <div>
                        {followItem()}
                    </div>
                </div>
            );
        }
    }
}

export default SuggestedFollows;