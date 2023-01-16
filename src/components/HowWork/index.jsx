import "./HowWork.scss";
import HowWorkFirstBlock from "./HowWorkFirstBlock";
import HowWorkSecondBlock from "./HowWorkSecondBlock";
import HowWorkThreeBlock from "./HowWorkThreeBlock";

const HowWork = () => {
  return (
    <section className="section how-work__margin__bottom" id="howWork">
      <HowWorkFirstBlock />
      <HowWorkSecondBlock />
      <HowWorkThreeBlock />
    </section>
  );
};

export default HowWork;
