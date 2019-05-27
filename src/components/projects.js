import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Project from './slide';
import Flip from 'react-reveal/Flip';
import portfolio from '../images/portfolio.jpg';
import memory from '../images/memory.jpg'



class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: ['pure js', 'react', 'ember'],
            filteredby: '',
            projects: [
                {
                    id: 1,
                    img: 'https://fakeimg.pl/300x200',
                    title: 'Roomies',
                    description: 'An App for flat-sharing, React with Firebase back-end and authentication, work in progress',
                    label: 'react',code: 'https://github.com/vmegane/Roomies3',
                    preview: 'https://vmegane.github.io/Roomies3/'
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
                    img: 'https://fakeimg.pl/300x200',
                    title: 'title3',
                    description: 'some pituput blah',
                    label: 'ember',
                    code: 'https://github.com/vmegane/memory-game',
                    preview: 'https://vmegane.github.io/memory-game/'
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
        let classes = 'button'
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
            <ScrollableAnchor id={'projects'}>

                <section id="projects" className="main-wrapper">

                    <div className="projects-content-wrapper">
                        <h1>My work</h1>
                        <p>
                    A few of the projects I've created along the way, I will be including more positions shortly :). <br/>
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