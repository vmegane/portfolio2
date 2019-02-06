import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [
                { 'name': 'HTML5', 'level': 90 },
                { 'name': 'CSS3', 'level': 90 },
                { 'name': 'SASS', 'level': 80 },
                { 'name': 'JavaScript', 'level': 70 },
                { 'name': 'React', 'level': 60 },
                { 'name': 'jQuery', 'level': 50 },
                { 'name': 'RWD', 'level': 90 },
                { 'name': 'Ember', 'level': 40 },
            ]
        }
    }
    render() {
        return (
            <ScrollableAnchor id={'#about'}>

            <section id="about" ref={(section) => { this.About = section; }} className="about-wrapper">

                <div className="about-content-wrapper">
                    <div className="about-container">
                        <h1>About</h1>
                        <p>
                            I am junior front-end developer with strong marketing analysis background.
                            I am currently looking for opportunities to contribute to interesting and challenging projects, where I can learn and advance my skills.
            Feel free to <span>contact me </span> if you're looking for a fast-learning and enthusiastic person to join your team, both full-time and part-time.
        </p>
                    </div>
                    <div className="inner-wrapper">

                    
                    <div className="skills-container">
                        <h2>Technical Skills</h2>
                        <ul>
                            {
                                this.state.skills.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div>
                                                <div className="inner-wrapper">
                                                    <div className="skill-name"> {item.name} </div>
                                                    <div className="skill-level"> {item.level}% </div>
                                                </div>
                                                <div className="bar-wrapper">
                                                    <div className="bar-background"></div>
                                                    <div className={`bar-fill-${item.level}`}></div>
                                                </div>
                                                
                                            </div>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                    </div>
                <div className="about-profile-wrapper">
                            <div className="profile-pic">
                            </div>
                            <div>
                                <h2>Who am I</h2>
                                <p>
                                    sdc,sd;l sdlcsmdlc sldkcm slkcm slkdmclksdcmsdlkcm slkdmclksdmc slkdmc sldkcm sd
                                </p>
                            </div>
                </div>
                </div>
                </div>
            </section>
            </ScrollableAnchor>
        );
    }
}

export default About;