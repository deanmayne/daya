import React from 'react';
import EventIndexContainer from '../events/events_index_container';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>DAYA (main page header)</h1>
                <EventIndexContainer/>

            </div>
        );
    }
}

export default MainPage;