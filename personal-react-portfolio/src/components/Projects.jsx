import "./Projects.css";

function Projects() {
    const projects = [
        {
            title: "Personal-react-portfolio",
            description: "A responsive portfolio website built using React.js"

        },
        {
            title: " Expense Tracker ",
            description: "A responsive expense tracking application that allows users to add,manage and calculate their expenses."

        },
        {
            title: "Job Application Tracker",
            description:" A web application for managing job applications and tracking their current status. "

        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>

            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button>View Project</button>
                     </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;