import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

import {
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import About from './components/recipe_match/recipe_generator';
import ItemExampleItems from './components/Projects/Projects';
import fav from "./components/recipe_match/fav.png";
import home from "./components/recipe_match/home.png";
import recipes from "./components/Home/recipes.PNG";
import signout from "./components/recipe_match/signout.png";
import logo from "./components/Home/logo.PNG";
import ai from "./components/Home/ai.PNG";
import logobeta from "./components/Home/logobeta.PNG";
import red from "./red.png";
import profile from "./profile.jpg"
import Splitwise from './components/Projects/splitwise';
import email from "./components/Home/email.png";
import git from "./components/Home/git.png";
import linkedin from "./components/Home/linkedin.png";
import ig from "./components/Home/ig.png";

// class component
class App extends Component {

  render() {

    return (

      <div className="App">
    <Sidebar
      className = 'sidebar'
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='wide'
      // color='IndianRed'
    >
      <Image src={profile} size='medium' circular />
      <div className="nameandtitle" >
      <h1>Robert Lowe</h1>
      <h2>Data Scientist</h2>
      
      </div>
    
        
        
        
        <NavLink exact to="/Projects" className = 'fav-text'>Projects</NavLink>  
        <NavLink exact to="/"  className = 'home-text'>Home </NavLink>
        <NavLink exact to="/splitwise" className = 'signout-text'>Splitwise</NavLink>
        <NavLink exact to="/recipe_generator" className = 'recipe_generator-text'>Recipe Generator</NavLink>
        
        <h2 className = 'contact-text'> Contact Me</h2>
        

        <a href="https://www.linkedin.com/in/robert-lowe-99b44277/detail/contact-info/">
        <Image style={{width: "40px", 'margin-left': "70px", 'margin-top': "275px"}}src={email} />
        </a>

        <a href="https://github.com/bobbytonylowe">
        <Image style={{width: "38px", 'margin-left': "120px", 'margin-top': "-38px"}}src={git} />
        </a>
        <a href="https://www.linkedin.com/in/robert-lowe-99b44277/">
        <Image style={{width: "38px", 'margin-left': "170px", 'margin-top': "-38px"}}src={linkedin} />
        </a>
        <a href="https://www.instagram.com/bobbytonylowe/">
        <Image style={{width: "38px", 'margin-left': "220px", 'margin-top': "-38px"}}src={ig} />
        </a>
      
        </Sidebar>
        

        <div className="nav">
        
          <NavLink className = 'home-button'exact to="/" activeClassName="active">Home</NavLink>
          
          <NavLink className = 'recipe-button' to="/recipe_generator" activeClassName="active">Recipe Generator</NavLink>

          
          
        </div>
      

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe_generator" component={About} />
          <Route path="/Projects" component={ItemExampleItems} />
          <Route path="/Splitwise" component={Splitwise} />
        </Switch>
        
      </div>

    );
  }
}

export default App;