import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
        <Routes>
              <Route path='/' element={<p> This is the Home Page </p>}/>
        </Routes>
        </Router>
    );
  }
}

