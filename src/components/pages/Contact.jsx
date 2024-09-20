import React from 'react'
import { Button } from 'react-bootstrap';
import './Contact.scss';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="container">
                <div className="wrapper">
                    <h1>Contact <span className='nameColor'>Me</span></h1>
                    <aside className="contact-msg">
                        <p>I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out. I'm always open to new opportunities and collaborations.</p>
                        <Button className='contact-button' href="mailto:abelcvarghese12097@gmail.com?Subject=Hello Abel, I'd Love to Connect!">Say Hi</Button>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Contact
