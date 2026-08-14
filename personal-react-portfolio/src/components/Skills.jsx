import "./Skills.css";
function Skills() 
{
    const skills = ["HTML","CSS","JavaScrippt","React.js","Git","Git Hub"];

    return(
        <section id="skills" className="skills">
            <h2>My skills</h2>

            <div className="skills-container">
                {skills.map((skill) => (
                 <div key={skill}>
                  {skill}
                 </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;