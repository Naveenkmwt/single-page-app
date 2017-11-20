import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';
import Home from './pages/home'
import  'semantic-ui-css/semantic.css';
import './stylesheet.css'
import About from './pages/about'
import ContactUs from './pages/contactUs';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import  AboutInfo from './pages/AboutInfo'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route exact path="/" component={Home}/>
        <Route path="/#contact"/>
        <Route path="/about" component={About}/>

            {/*<Route exact path = "/" component = {Home} />*/}
            {/*<Route path = "/about" component = {About} />*/}
            {/*<Route path = "/contactUs" component = {ContactUs} />*/}
            {/*<Route path ='/aboutInfo' component={AboutInfo}/>*/}
    </Router>


), document.getElementById('root'))
registerServiceWorker();

