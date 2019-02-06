import React from 'react';
import ReactDOM from 'react-dom';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slide from './slide';
import { all } from 'q';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['pure js', 'react', 'ember'],
            filteredby: '',
            projects: [
                {
                    id: 1,
                    img: 'https://fakeimg.pl/340x200',
                    title: 'Roomies',
                    description: 'An App for flat-sharing, React with Firebase back-end and authentication, work in progress',
                    label: 'react'
                },
                {
                    id: 2,
                    img: 'https://fakeimg.pl/340x200',
                    title: 'Memory Game',
                    description: 'Quick practise project for Udacity Nanodgree program, game controlled with pure JS',
                    label: 'pure js'
                },
                {
                    id: 3,
                    img: 'https://fakeimg.pl/340x200',
                    title: 'title3',
                    description: 'some pituput blah',
                    label: 'ember'
                },
                {
                    id: 4,
                    img: 'https://fakeimg.pl/340x200',
                    title: 'title4',
                    description: 'some pituput blah',
                    label: 'ember'
                },
            ]
        }

    }

    filterProjects = (e) => {
        this.setState({
            filteredby: e.target.innerText
        })

        // let allProjects = this.state.projects;
        // let filteredList = allProjects.filter (project => project.label === e.target.innerText )
        // console.log(filteredList);
        //this.state.projects.filter( (project) => project.label === e.target.innerText )
    }

    clearFiltering = (e) => {
        this.setState({
            filteredby: ''
        })
    }


    render() {
        let allProjects = this.state.projects;
        let filteredProjects = [];
        let query = this.state.filteredby;
        console.log('query', query)
        if (query !== '') {
            filteredProjects = allProjects.filter(project => project.label === query)
        }
        else {
            filteredProjects = allProjects;
        }

        return (
            <ScrollableAnchor id={'#projects'}>

                <section id="projects" className="main-wrapper">

                    <div className="projects-content-wrapper">
                        <h1>My work</h1>
                        <p>
                            sdc,sd;l sdlcsmdlc sldkcm slkcm slkdmclksdcmsdlkcm slkdmclksdmc slkdmc sldkcm sd

                        </p>

                        <div className="filtering-wrapper">
                            <ul className="filtering-nav">
                                <li>
                                    <button className="button" onClick={this.clearFiltering}> all </button>
                                </li>

                                {this.state.labels.map((label, index) => {
                                    return <li key={index}> <button className="button" onClick={this.filterProjects}>{label}</button> </li>
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
                                                <Slide
                                                    img={project.img}
                                                    title={project.title}
                                                    description={project.description} />
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