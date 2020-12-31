import React from 'react';
import Follow from '../newsfeed/follow'

class SuggestedFollows extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 id="nav-header">Suggested People to Follow</h1>
                <div>
                    {this.props.users.map((user) => {
                        return <Follow user={user} key={user._id} />;
                    })}
                </div>
            </div>
        )
    }
}

export default SuggestedFollows;