function Contact(){
    return(
        <section id="contact">
            <h2>Contact Me</h2>

            <form className="contact-form">
                
                <input type="text"
                placeholder="Your name"
                />
                <input type="email"
                placeholder="Your Email"
                />
                <textarea
                placeholder="Your Message">
                </textarea>
                <button type="submit">Send Message</button>

            </form>
        </section>
    );
}
export default Contact;