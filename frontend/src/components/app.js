import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserShowContainer from './user_show/user_show_container'

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="calendar/:user_id" component={UserShowContainer}/>
            <Redirect from="/home" to="/" />
            <AuthRoute exact path="/" component={MainPage} />
        </Switch>
    </div>
);

export default App;