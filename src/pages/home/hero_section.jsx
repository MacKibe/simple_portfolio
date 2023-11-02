// 
// We need to export the component to the index.js file
export default function Hero_section() {
    return (
        <section className="hero--section" id="heroSection">
            <div className="hero--section-content-box">
                <div className="hero--section-content">
                    <p className="section--title">Hey, I'm Ndichu James</p>
                    <h1 className="hero--section-title">
                        <span className="hero--section-title--color">Full Stack</span>
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        <br /> Dolorum, quas. Amet soluta assumenda cum?
                    </p>
                </div>
                <button type="button" className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section-img">
                <img src="./img/me.jpg" alt="Hero images" />
            </div>
        </section>
    );
}