import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";


// I just keep this here b/c I always forget this syntax
// const Nav = () => (
//   <nav>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/contact-us">Contact</Link></li>
//   </nav>
// );

export default function app() {

  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={AppRoot} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
