import React from 'react';


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
        return (
            <div className="project-slide" style={{ backgroundImage: `url(${this.props.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={this.toggleDescription}>
                <h2>{this.props.title}</h2>
                <div className={this.state.visible ? 'show' : 'hide'}>
                    <p>{this.props.description}</p>
                    <div className="slide-nav-wrapper">
                        <a target="_blank" rel="noopener noreferrer" href={this.props.code}><button className="right" disabled={!this.state.visible}>code</button></a>
                        {this.props.preview !== '' && <a target="_blank" rel="noopener noreferrer" href={this.props.preview}><button className="left" disabled={!this.state.visible}>view</button></a>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;

