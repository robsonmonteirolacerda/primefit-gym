import aboutImage from "../../assets/about.png";

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img src={aboutImage} alt="PrimeFit Gym training area" />
      </div>

      <div className="about__content">
        <h2>LEARN MORE ABOUT US</h2>

        <p>
          PrimeFit Gym is a state-of-the-art fitness center dedicated to helping
          you achieve your health and wellness goals. Our facility is equipped
          with the latest fitness technology and staffed by experienced
          professionals who are passionate about fitness.
        </p>

        <p>
          Whether you're a beginner or a seasoned athlete, we offer programs and
          classes tailored to your needs. Join us today and start your
          transformation.
        </p>

        <a href="#" className="btn-primary">
          READ MORE
        </a>
      </div>
    </section>
  );
}

export default About;
