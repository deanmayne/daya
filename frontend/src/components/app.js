import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserShow from './user_show/user_show'
import Newsfeed from './newsfeed/newsfeed_container'

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/newsfeed" component={Newsfeed} />

            {/* <Redirect from="/home" to="/" /> */}
            <Route exact path="/calendar/:username" component={UserShow}/>
            <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;