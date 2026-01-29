import Button from "../../components/Button/Button";
function Hero() {
  return (
    <header id="main" className="hero">
      <div className="hero__content">
        <h2 className="hero__subtitle">STEP UP YOUR</h2>

        <h1 className="hero__title">
          <span>FITNESS</span> WITH US
        </h1>

        <p className="hero__description">
          Build Your Body And Fitness With Professional Touch
        </p>

        <div className="hero__actions">
          <Button>GET STARTED</Button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
