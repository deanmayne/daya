import React from 'react';
import {Link} from 'react-router-dom'

class SplashPage extends React.Component {


    render() {
        return (
          <div>
            <div id="img-container">
              <div id="header-container">
                <div id="header-content">
                  <h1 id="splash-header">the social planner</h1>
                  <div id="splash-description">
                    {" "}
                    Organize your calendar and easily share it with your
                    friends.{" "}
                  </div>
                  <Link to={"/signup"}>
                    <button className="user-auth-button" id="edit-button">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
              <img id="splash-img" alt="pic" src="splash3.jpg" />
            </div>
            <footer> 
                <div className="foot">
                    <div className="github">
                        <a href="https://github.com/deanmayne/daya">Github <i className="fab fa-github"></i></a>
                    </div>
                    <div className="creators">
                        <a href="https://www.linkedin.com/in/deanmayne/">Dean Mayne</a>
                        <a href="https://www.linkedin.com/in/isabelleshafran/">Isabelle Shafran</a>
                        <a href="https://www.linkedin.com/in/jae-doherty/">Jae Doherty</a>
                    </div>
                </div>
            </footer>
          </div>
        );
    }
}

export default SplashPage;