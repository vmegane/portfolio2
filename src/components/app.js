import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import About from './about.jsx';
import Nav from './navigation.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Slide from './slide';

import {
    Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';



const history = createBrowserHistory();


document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        componentWillMount() {
            configureAnchors({offset: -60, scrollDuration: 1000})
          }
        render() {
            return (
            <div className="main-wrapper">
                <Header/>
                <Nav/>
                <About/>
                <Projects/>
                <Contact/>                         
            </div>
            )
            
        }
    }

    ReactDOM.render(
        <div><App>
            </App></div>,
        document.getElementById('app')
    );
});