import React from 'react';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Switch, Redirect, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SplashPage from './main/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UserShowContainer from './user_show/user_show_container';
import Newsfeed from './newsfeed/newsfeed_container';
import CreateFormContainer from './create_edit_event/create_event_form_container';
import EditFormContainer from './create_edit_event/edit_event_form_container';
import Follows from './suggested_follows/suggested_follows_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/newsfeed" component={Newsfeed} />
      <Route exact path="/calendar/:username" component={UserShowContainer} />
      <ProtectedRoute exact path="/suggestedfollows" component={Follows} />
      <Route exact path ='/editEvent/:id' component = {EditFormContainer}/>
      <ProtectedRoute
        exact
        path="/createEvent"
        component={CreateFormContainer}
      />
      <Route exact path="/" component={SplashPage} />
      <Redirect to="/newsfeed" />
    </Switch>
  </div>
);

export default App;