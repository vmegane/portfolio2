import React from 'react';


class Alert extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log('w renderze', this.props)

            return (
                <div className="alert-box">
                     <span>{this.props.alertText}</span>
                </div>
             );        
        }
}

export default Alert;