
import Cards from "../Cards/Cards";
import { ProjectsDetails } from "../ProjectFiles/ProjectsDetails";
import './Projects.scss'



const Projects = () => {
    
    const data = ProjectsDetails;
    
    

    return (
        <section className='projects' id='projects'>
            <div className="container">
                <h1>Projects</h1>
                <div className="project-details">
                    {data.map((project, index) => {
                        return (
                            <Cards key={index} project={project} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
