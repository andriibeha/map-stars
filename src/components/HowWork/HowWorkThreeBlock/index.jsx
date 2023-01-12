import s from "./HowWorkThreeBlock.module.scss";
import how_work_5 from "../../../assets/images/how_work/how_work_5.webp";
import how_work_5_2x from "../../../assets/images/how_work/how_work_5_2x.webp";
import how_work_6 from "../../../assets/images/how_work/how_work_6.webp";
import how_work_6_2x from "../../../assets/images/how_work/how_work_6_2x.webp";

const HowWorkThreeBlock = () => {
  return (
    <div className={s.bg__container}>
      <div className={s.container}>
        <div className={s.flex__container}>
          <div className={s.images}>
            <img
              className={s.images__first}
              src={how_work_5}
              srcSet={`${how_work_5_2x} 2x`}
              type="image/webp"
              alt={how_work_5}
            />

            <img
              className={s.images__second}
              src={how_work_6}
              srcSet={`${how_work_6_2x} 2x`}
              type="image/webp"
              alt={how_work_6}
            />
          </div>

          <div className={s.description}>
            <p className="page__number">03</p>
            <h3 className="page__title">
              Statistics, analytics, development, support
            </h3>

            <p className="page__text">
              Thanks to modern technologies, information is easily recorded and
              collected for further analysis. In your Google My Business
              personal account of your institution, you can see complete
              statistics about views, the number of calls, and routes laid. At
              your request, we can provide additional reports and
              recommendations, following which you can more effectively and
              quickly promote your services and products on the market. Our
              clients can always contact us for advice.
            </p>
            <p className="page__text">
              Like you, our company is constantly growing and developing. Very
              soon we plan to bring to the market new proposals for advertising
              and development. Now we are working on a system for measuring
              customer loyalty and a video presentation of the institution.
            </p>
            <p className="page__text">
              Our research department is constantly working on testing
              promotional elements of Google, Facebook, Instagram, and other
              platforms. Staying in touch with us, you will always learn about
              the latest in the world of advertising. The success of your
              business is in our interest. Stars Maps is a new generation
              advertising agency and technology!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorkThreeBlock;
