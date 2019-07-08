import React from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from './shared/Navbar/NavBar'
import Home from './components/Home'
import Other from './components/Other'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Other" component={Other}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
