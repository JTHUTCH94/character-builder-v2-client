import React from 'react';
import {Route, Link} from 'react-router-dom';
//import Home from '../containers/Home';
import Builder from '../containers/Builder';
import loginForm from '../components/loginForm';

export function Header(props) {
  return (
    <div className="navbar">
       <ul>
        <li><Link to="/builder">Builder</Link></li>
      </ul>


      <Route exact path="/builder" component={Builder}/>
    </div>
  )
}

export default Header;