import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//     Router,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';
import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    componentWillMount() {
        configureAnchors({offset: -60, scrollDuration: 1000})
      }

    toggleMenu = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleClick = (e) => {
        this.toggleMenu();
        e.stopPropagation();
    }

   

    render() {

        let menuShowHide = !this.state.visible ? "list-wrapper hide-menu" : "list-wrapper show-menu";
        return (
            <nav className="navigation-wrapper">

                <div className={menuShowHide} onClick={this.handleClick}>
                   <ul className="navigation-list">
                            <li >
                            <a href='#home'>HOME</a>
                        </li>
                            <li >
                            <a href='#about'>ABOUT</a>

                        </li>
                            <li>
                            <a href='#projects'>MY WORK</a>
                        </li>
                            <li>
                            <a href='#contact'>CONTACT</a>
                        </li>
                        </ul>
                   </div>
                        
                        <div className="burger-menu-icon" onClick={this.handleClick}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

            </nav>
        )
    }
}

export default Nav;