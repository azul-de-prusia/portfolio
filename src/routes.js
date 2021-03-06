import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Display from './components/Display';
import Useless from './components/Useless';
import Skills from './components/Skills';
import Tipsi from './components/tipsi';
import Amco from './components/amco';
import Laboratoria from './components/laboratoria';
import Taycan from './components/Taycan';




const Routes = () => (
  

    <Switch> 
      <Route exact path="/" component ={Home}/>

      <Route path="/Header" component ={Header}/>
      <Route path="/About" component ={About}/>
      <Route path="/Contact" component ={Contact}/>
      <Route path="/Display" component ={Display}/>
      <Route path="/Useless" component ={Useless}/>
      <Route path="/Skills" component ={Skills}/>
      <Route path="/Tipsi" component={Tipsi}/>
      <Route path="/Taycan" component={Taycan}/>
      <Route path="/Amco" component={Amco}/>
      <Route path="/Laboratoria" component={Laboratoria}/>
      
    </Switch>
   
      )

  export default Routes;