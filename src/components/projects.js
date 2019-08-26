import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Project from './slide';
import Flip from 'react-reveal/Flip';
import portfolio from '../images/portfolio.jpg';
import memory from '../images/memory.jpg'
import roomies from '../images/roomies.png'
import ember from '../images/ember.png'



class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['pure js', 'react', 'ember'],
            filteredby: '',
            projects: [
                {
                    id: 1,
                    img: roomies,
                    title: 'Roomies',
                    description: 'An App for flat-sharing, React, Redux with Firebase back-end, authentication and cloud funtions, work in progress',
                    label: 'react',code: 'https://github.com/vmegane/Roomies3',
                    preview: 'https://roomies-80535.web.app/'
                },
                {
                    id: 2,
                    img: memory,
                    title: 'Memory Game',
                    description: 'Quick practise project for Udacity Nanodgree program, game controlled with pure JS',
                    label: 'pure js',
                    code: 'https://github.com/vmegane/memory-game',
                    preview: 'https://vmegane.github.io/memory-game/'
                },
                {
                    id: 3,
                    img: ember,
                    title: 'Star Wars App',
                    description: 'First attempt to modern JS frameworks, created with Ember using REST API',
                    label: 'ember',
                    code: 'https://github.com/vmegane/sw-ember2',
                    preview: ''
                },
                {
                    id: 4,
                    img: portfolio,
                    title: 'Portfolio',
                    description: 'Portfolio page, react experiment with one page website, work on progress',
                    label: 'react',
                    code: 'https://github.com/vmegane/Portfolio',
                    preview: 'https://vmegane.github.io/Portfolio/'
                },
            ]
        }

    }

    filterProjects = (e) => {
        this.setState({
            filteredby: e.target.innerText
        })

    }

    clearFiltering = (e) => {
        e.preventDefault();
        this.setState({
            filteredby: ''
        })
    }


    render() {
        let allProjects = this.state.projects;
        let filteredProjects = [];
        let query = this.state.filteredby;
        if (query !== '') {
            filteredProjects = allProjects.filter(project => project.label === query)
        }
        else {
            filteredProjects = allProjects;
        }

        return (
            <ScrollableAnchor id={'projects'}>

                <section id="projects" className="main-wrapper">

                    <div className="projects-content-wrapper">
                        <h1>My work</h1>
                        <p>
                    A few of the projects I've created along the way, to be extended :). <br/>
                    Tap on a project for details.
                        </p>

                        <div className="filtering-wrapper">
                            <ul className="filtering-nav">
                                <li>
                                    <button className={query === '' ? 'button active' : 'button'} onClick={this.clearFiltering}> all </button>
                                </li>

                                {this.state.labels.map((label, index) => {
                                    return <li key={index}> <button className={query === label ? 'button active' : 'button'} onClick={this.filterProjects}>{label}</button> </li>
                                })
                                }
                            </ul>

                        </div>
                        <div className="slider-wrapper">
                            <ul>
                                    {
                                        filteredProjects.map(project => {
                                            return (
                                                <li key={project.id}>
                                                <Flip bottom>
                                                <Project
                                                        img={project.img}
                                                        title={project.title}
                                                        description={project.description}
                                                        code={project.code}
                                                        preview={project.preview} />
                                                </Flip>
                                                    
                                                </li>
                                            )

                                        })
                                    }

                            </ul>


                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Projects;