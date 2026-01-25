import aboutImage from "../assets/about.png";
function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          PrimeFit Gym is a state-of-the-art fitness center dedicated to helping
          you achieve your health and wellness goals. Our facility is equipped
          with the latest fitness technology and staffed by experienced
          professionals who are passionate about fitness. Whether you're a
          beginner or a seasoned athlete, we offer a variety of programs and
          classes tailored to meet your individual needs. Join us today and take
          the first step towards a healthier, fitter you!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
