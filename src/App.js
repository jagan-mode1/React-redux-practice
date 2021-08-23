import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './Components/style.css';
// import TodoApp from "./TodoApp";
import Dashboard from "./Components/Dashboard.js";
import About from "./Components/About";
import Shop from "./Components/Shop";


class App extends Component {
  render() {
    return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-faded">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />  
          <Route path="/shop" component={Shop} />
          <Route path="/" component={Dashboard} />
        </Switch>
    </div>
   );
  }
}

export default App;
