import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './components/header';
import About from './components/about';
import Nav from './components/navigation';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.scss';

// import {
//     Router,
//     Route,
//     Link,
//     Switch,
//     NavLink,
//} from 'react-router-dom';
//import { createBrowserHistory } from 'history';
//import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';
//import { configureAnchors } from 'react-scrollable-anchor';



// const history = createBrowserHistory();


    class App extends React.Component {
        // componentWillMount() {
        //     configureAnchors({offset: -60, scrollDuration: 1000})
        //   }
        render() {
            return (
            <div className="main-wrapper">
                <Header/>
                <Nav/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>                         
            </div>
            )
            
        }
    }
  
export default App


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.scss';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

