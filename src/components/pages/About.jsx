import { Button } from 'react-bootstrap';
import './About.scss';
import resume from '../../assets/images/AbelCVarghese.pdf';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <section className="about-me-section">
                                <h1>About <span className='nameColor'>Me</span></h1>
                                <div className="about-content">
                                    <p>Hi, I'm Abel C Varghese, a passionate and dedicated Web Developer with a strong focus on front-end technologies. With a deep understanding of React.js and experience in building dynamic, responsive websites, I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>
                                    <p>I hold a Master of Computer Applications (MCA) degree, where I honed my skills in web development, data analysis, and programming. My journey into web development began with a fascination for how websites work and has grown into a full-fledged career where I continuously strive to improve and learn new technologies.</p>
                                    <p>Throughout my career, I have worked on various projects that showcase my ability to create user-friendly interfaces and efficient code. I am always looking for new challenges and opportunities to grow as a developer and to contribute to exciting projects.</p>
                                    <p>Outside of work, I enjoy exploring new technologies, participating in coding challenges, and staying updated with the latest trends in web development. I am excited to continue my journey in this ever-evolving field and to create impactful digital experiences.</p>
                                </div>
                                <div className="biodata">
                                    <Button className='bio-btn' href={resume} target='_blank' rel='noopener noreferer'>More Info</Button>
                                </div>
                            </section>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="about-education">
                                <section className="education-section">
                                    <h2>Education</h2>
                                    <div className="education-details">
                                        <h3 className="education-degree">Master of Computer Applications (MCA)</h3>
                                        <p className="education-institute">Mar Athanasius College of Engineering (MACE)</p>
                                        <p className="education-duration">2022 - 2024</p>

                                        <h3 className="education-degree">Bachelor of Computer Applications (BCA)</h3>
                                        <p className="education-institute">Mount Carmel College (MCC)</p>
                                        <p className="education-duration">2015 - 2018</p>
                                    </div>
                                </section>

                                <section className="experience-section">
                                    <h2>Experience</h2>
                                    <article className="experience-details">

                                        <h3 className="experience-role">Web Developer Intern</h3>
                                        <p className="experience-company">Prodigy InfoTech</p>
                                        <p className="experience-duration">August 2024</p>

                                        <h3 className="experience-role">Data Analyst</h3>
                                        <p className="experience-company">Mint Melone Business Consulting Solution LLP</p>
                                        <p className="experience-duration">October 2019 - December 2020</p>

                                        <h3 className="experience-role">Java Developer Intern</h3>
                                        <p className="experience-company">iROID Technologies Pvt. Ltd</p>
                                        <p className="experience-duration">October 2018 - March 2019</p>

                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
