import "./Navbar.css";
function Navbar(){
    return(
        <>
        <nav className="navbar">
            <h2>My portfolio</h2>
            
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
                </>
    );
}

export default Navbar;