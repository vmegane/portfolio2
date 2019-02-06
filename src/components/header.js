import React from 'react';
import ReactDOM from 'react-dom';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor';


class Header extends React.Component {

    render() {
        return (
            <ScrollableAnchor id={'#home'}>

            <section id="home" className="main-wrapper header-wrapper">
                <div className="home-content-wrapper">
                    <h1>Hello, I am <span>Paulina Opacka</span></h1>
                    <h1>I am a front-end developer</h1>
                    <a href='#about'>
                        <button className="primary-button blink">Get to know me</button>
                    </a>
                </div>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default Header;