import React from "react"
import ProjectSlider from '../Sliders/ProjectSlider';

const Projects = (props) => {
    const projects = props.projects;
    
    return <section className="projects curve">
        <div className="container">
            <ProjectSlider
                projects = { projects }
            />
        </div>
    </section>
}

export default Projects