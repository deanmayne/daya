import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
    <footer>
      <div className="foot">
        <div className="github">
          <a href="https://github.com/deanmayne/daya">
            Github <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="creators">
          <a href="https://www.linkedin.com/in/deanmayne/">Dean Mayne</a>
          <a href="https://www.linkedin.com/in/isabelleshafran/">
            Isabelle Shafran
          </a>
          <a href="https://www.linkedin.com/in/jae-doherty/">Jae Doherty</a>
        </div>
      </div>
    </footer>
  </Provider>
);

export default Root;