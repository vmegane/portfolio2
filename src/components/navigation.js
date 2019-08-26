import React from 'react';
import Slide from 'react-reveal/Slide';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
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
                <Slide right when={this.state.visible}>

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
                   </Slide>

                        <div className="burger-menu-icon" onClick={this.handleClick}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <ul className="navigation-list-desktop">
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
            </nav>
        )
    }
}

export default Nav;