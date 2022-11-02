import React from "react";
import {
  BrowserRouter as Router,
   Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Screeen/Home";
import About from "./Screeen/About";
import Users from "./Screeen/Users";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}