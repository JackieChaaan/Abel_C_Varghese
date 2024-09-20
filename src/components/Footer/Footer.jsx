import SocialLinks from "../NavLinks/SocialLinks";
import './Footer.scss'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="wrapper">
                    <section className='footer-social-links'>
                        <SocialLinks />
                    </section>
                    <p>© 2024 Abel C Varghese. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
