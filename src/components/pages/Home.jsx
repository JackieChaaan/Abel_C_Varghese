import SocialLinks from "../NavLinks/SocialLinks";
import './Home.scss';
import profile from '../../assets/images/profilePic.jpg'


const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home-wrapper">
                <div className="container">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                                <aside className="intro">
                                    <h1>Hi,</h1>
                                    <h2>I'm <span className='namecolor'>Abel C Varghese</span></h2>
                                    <h3>a Web <span className='namecolor'>Developer</span></h3>
                                    <p className='description'>
                                        <p>
                                            I am a passionate Web Developer with experience in creating responsive and dynamic websites using modern technologies like React.js, HTML, CSS, and JavaScript. With a commitment to continuous learning and growth, I stay up-to-date with the latest trends and best practices in web development. Let's work together to bring your ideas to life!
                                        </p>

                                    </p>
                                    <div className="btn-wrapper">
                                        <a className='hire-btn' href="#contact">Hire Me</a>
                                        <a className='project-btn' href="#projects">Projects</a>
                                    </div>
                                    <div className="social">
                                        <SocialLinks />
                                    </div>
                                </aside>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                                <aside className="profile-pic">
                                    <div className="border-style">
                                        <img src={profile} alt="profile-pic" className='img-fluid' />
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
