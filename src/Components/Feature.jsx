import FeaturesBox from "./Featuresbox";
import fimage1 from "../assets/1.svg";
import fimage2 from "../assets/2.svg";
import fimage3 from "../assets/3.svg";
import fimage4 from "../assets/4.svg";

function Features() {
  return (
    <section className="features">
      <div className="features__container">
        <h2 className="features__title">Features</h2>

        <div className="features__grid">
          <FeaturesBox image={fimage1} title="Weight Lifting" />
          <FeaturesBox image={fimage2} title="Specific Muscle" />
          <FeaturesBox image={fimage3} title="Flex Your Muscle" />
          <FeaturesBox image={fimage4} title="Cardio Exercises" />
        </div>
      </div>
    </section>
  );
}

export default Features;
