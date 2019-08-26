import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Alert from './alert';
import axios from 'axios';
import Slide from 'react-reveal/Slide';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            nameValid: false,
            emailValid: false,
            messageValid: false,
            formValid: false,
            userMessage: '',
            messageSent: null
        }
    }
    
    handleValidation = (e) => {
        if (this.state.name.length > 2) {
            this.setState({
                nameValid: true
            })
        } else {
            this.setState({
                nameValid: false
            })
        }

        if (this.state.email.length > 1 && this.state.email.indexOf('@') > 0) {
            this.setState({
                emailValid: true
            })
        } else {
            this.setState({
                emailValid: false
            })
        }
        if (this.state.message.length > 4) {
            this.setState({
                messageValid: true
            })
        } else {
            this.setState({
                messageValid: false
            })
        }
        if (this.state.nameValid === true && this.state.emailValid === true && this.state.messageValid === true) {
            this.setState({
                formValid: true
            })
        } else {
            this.setState({
                formValid: false
            })
        }
    }

    contactSubmit = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            console.log('Form submitted');

            const { name, email, message } = this.state;
            const emailData = {
                service_id: 'gmail',
                template_id: 'template_ascdhCfN',
                user_id: 'user_5xcFKnQjz3BjofbC5V0vF',
                template_params: {
                    "reply_to": email,
                    "from_name": name,
                    "to_name": 'Paulina',
                    "message_html": message
                }
            };

            axios
                .post(`https://api.emailjs.com/api/v1.0/email/send`, emailData)
                .then(res => {
                    if (res.data === 'OK') {
                        this.setState({ messageSent: true,
                        userMessage: 'You message has been sent' });
                        setTimeout(() => {
                            this.setState({
                                messageSent: null,
                                name: '',
                                email: '',
                                message: '',
                                userMessage: ''
                            })
                        }, 2000)
                    } else {
                        this.setState({ messageSent: false });
                        setTimeout(() => {
                            this.setState({ messageSent: null })
                        }, 2000)
                    }
                })
        } else {
            this.setState({
                userMessage: 'Make sure all fields are filled and try again'
            });
            setTimeout(() => {
                this.setState({ userMessage: null })
            }, 2000)
        }


    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
        this.handleValidation();
    }
    handleMessage = (e) => {
        this.setState({ message: e.target.value });
        this.handleValidation();
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
        this.handleValidation();
    }


    render() {
        return (
            <ScrollableAnchor id={'contact'}>

                <section id="contact" className="main-wrapper">
                    <div className="contact-content-wrapper">

                        <h1>Contact me</h1>

                        <p> Want to work on a project together? Any feedback? Feel free to get in touch.</p>
                        <p>Use the form below or email me at <a href="mailto:paulina.opacka@gmail.com">paulina.opacka@gmail.com</a></p>
                        <Slide bottom>

                            <form name="contactform" className="contactform" onSubmit={this.contactSubmit}>
                                <div className="contactform-wrapper">
                                    <input type="text" size="40" placeholder="Name" onChange={this.handleName} value={this.state.name} />

                                    <input type="email" size="40" placeholder="Email" onChange={this.handleEmail} value={this.state.email} />


                                    <textarea type="text" cols="40" rows="7" placeholder="Message" onChange={this.handleMessage} value={this.state.message} />

                                    <button className="primary-button blink" id="submit"
                                        value="Submit">Send</button>
                                </div>

                            </form>
                        </Slide>
                    </div>
                    {this.state.userMessage && <Alert message={this.state.userMessage} />}
                </section>
            </ScrollableAnchor>
        );
    }
}

export default Contact;