import Featuresbox from "./Featuresbox";
import fimage1 from "../assets/1.svg";
import fimage2 from "../assets/2.svg";
import fimage3 from "../assets/3.svg";
import fimage4 from "../assets/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featuresbox image={fimage1} title="Weight Lifting" />
        <Featuresbox image={fimage2} title="Specific Muscle" />
        <Featuresbox image={fimage3} title="Flex Your Muscle" />
        <Featuresbox image={fimage4} title="Cardio Exercises" />
      </div>
    </div>
  );
}

export default Feature;
