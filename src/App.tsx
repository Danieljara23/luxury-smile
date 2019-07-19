import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from './shared/Navbar/NavBar'
import Footer from './shared/Footer/Footer'
import Home from './components/Home/Home'
import Consultory from './components/Consultory/Consultory'
import TreatmentsSection from './components/Treatments/Treatments'
import EspecialistsSection from './components/Especialists/Especialists'
import Other from './components/Other/Other'
import TopHeader from './shared/TopHeader/TopHeader'

const App: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  const handleScroll = () => {
    if(window.pageYOffset != 0){
      setIsFixed(true)
    }else{
      setIsFixed(false)
    }
  } 

  console.log(isFixed)
  return (
      <HashRouter>
        <div className="App">
          <TopHeader isFixed={isFixed}/>
          <NavBar isFixed={isFixed}/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Consultory" component={Consultory}/>
            <Route path="/Treatments" component={TreatmentsSection}/>
            <Route path="/Especialists" component={EspecialistsSection}/>
          </div>
          <Footer/>
        </div>
      </HashRouter>

  );
}

export default App;
