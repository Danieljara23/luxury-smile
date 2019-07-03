import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './components/Home'
import Other from './components/Other'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Other">Other</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Other" component={Other}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
