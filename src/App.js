import React, { Fragment } from "react";
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
      <Fragment>
        {/*  */}
      </Fragment>
      <Fragment>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element ={<About />}>
            
          </Route>
          <Route path="/users" element ={ <Users />}>
          </Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        </Fragment>
    </Router>
  );
}