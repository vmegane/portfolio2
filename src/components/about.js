import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

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
            <ScrollableAnchor id={'about'}>

                <section id="about" className="about-wrapper">

                    <div className="about-content-wrapper">
                        <div className="about-container">
                            <h1>About</h1>
                            <p>
                                I am a front-end developer with strong marketing and analysis background.
                                I am currently looking for opportunities to contribute to interesting and challenging projects, where I can learn and advance my skills and contribute with my marketing experience.
            Feel free to <a href='#contact'>contact me</a> if you're looking for a fast-learning and enthusiastic person to join your team, both full-time and part-time.
        </p>
                        </div>
                        <div className="inner-wrapper">


                            <div className="skills-container">
                                <h2>Technologies</h2>
                                <ul>
                                    {
                                        this.state.skills.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Slide left>
                                                        <div>
                                                            <div className="inner-wrapper">
                                                                <div className="skill-name"> {item.name} </div>
                                                            </div>
                                                            <div className="bar-wrapper">
                                                                <div className="bar-background"></div>
                                                                <div className={`bar-fill-${item.level}`}></div>
                                                            </div>
                                                        </div>
                                                    </Slide>

                                                </li>
                                            )
                                        })
                                    }


                                </ul>
                            </div>
                            

                                <div className="about-profile-wrapper">
                                <Pulse>
                                    <h2>Who am I</h2>

                                    <div className="profile-pic"></div>

                                    <div>
                                        <p>
                                            Marketer with 6 years experience in media buying, paid social and user acquistion, who spends her time at work and after learning about new technologies,
                                            data and design. Curious traveller (visited and lived in 30 countries total) with real passion for new places, cultures and cuisines.
                                </p>
                                    </div>
                                    </Pulse>
                                </div>
                            
                        </div>

                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default About;