import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import SplashPage from './main/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserShowContainer from './user_show/user_show_container';
import Newsfeed from './newsfeed/newsfeed_container';
import CreateFormContainer from './create_edit_event/create_event_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/newsfeed" component={Newsfeed} />

            {/* <Redirect from="/home" to="/" /> */}
            <Route exact path="/calendar/:username" component={UserShowContainer}/>
            <Route exact path="/" component={SplashPage} />
            <Route exact path ='/dean' component = {CreateFormContainer}/>
        </Switch>
    </div>
);

export default App;