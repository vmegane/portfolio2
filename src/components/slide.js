import React from 'react';
import ReactDOM from 'react-dom';
import { configureAnchors } from 'react-scrollable-anchor';
import ScrollableAnchor from 'react-scrollable-anchor';


class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
         }
    }

    toggleDescription = () => {
        this.setState({
            visible: !this.state.visible
        })
        }
    
    render() {
        let showContent = 'show';
        let hideContent = 'hide';

        return (

                    <div className="project-slide" style={{backgroundImage: `url(${this.props.img})`, backgroundSize: 'cover'}} onClick={this.toggleDescription}>
                    <h2>{this.props.title}</h2>
                    <div className={this.state.visible ? showContent : hideContent}>
                    <p>{this.props.description}</p>
                    <div className="slide-nav-wrapper">
                    <a href=""><button className="right">code</button></a>
                    <a href=""><button className="left">view</button></a>
                    </div>
                
                    </div>
                    
                    </div>
                    
        );
    }
}

export default Slide;