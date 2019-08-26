import React from 'react';


class Alert extends React.Component {
    
    render() {
            return (
                <div className="alert-box">
                     <span>{this.props.message}</span>
                </div>
             );        
        }
}

export default Alert;