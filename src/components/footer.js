import React from 'react';
import ReactDOM from 'react-dom';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor'
import linkedin from '../icons/linkedin.svg';
import facebook from '../icons/facebook.svg';
import github from '../icons/github.svg';
import instagram from '../icons/instagram.svg';

class Projects extends React.Component {

    render() {
        return (
            <ScrollableAnchor id={'#footer'}>

                <section id="footer" className="footer">
                <button className="backtotop-button" onClick={goToTop}> &#8679; </button>
                    <div className="footer-wrapper">
                        <ul className="social-icons-list">
                            <li><a href="https://www.linkedin.com/in/paulina-opacka-16611069/"><img className="icon" alt="Linkedin" src={linkedin}/></a></li>
                            <li><a href="https://www.facebook.com/paulina.opacka"><img className="icon" alt="Facebook" src={facebook}/></a></li>
                            <li><a href="https://www.instagram.com/pamdesp/"><img className="icon" alt="Instagram" src={instagram}/></a></li>
                            <li><a href="https://github.com/vmegane/"><img className="icon" alt="Github" src={github}/></a></li>
                        </ul>
                    <p className="footer-text"> Paulina Opacka <span>&#9400;2018</span></p>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Projects;