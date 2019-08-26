import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Reveal from 'react-reveal/Reveal';


function Header() {
        return (
            <ScrollableAnchor id={'home'}>

            <section id="home" className="main-wrapper header-wrapper">
                <div className="header-content-wrapper">
                    <h1>Hello, I am Paulina Opacka</h1>
                    <h1>I am a front-end developer</h1>
                    <Reveal effect="pulse">
                    <a href='#about'>
                        <button className="primary-button blink">Get to know me</button>
                    </a>
                    </Reveal>
                </div>
            </section>
            </ScrollableAnchor>
        );
    
}

export default Header;