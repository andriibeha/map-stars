import s from "./HowWorkFirstBlock.module.scss";
import how_work_1 from "../../../assets/images/how_work/how_work_1.webp";
import how_work_1_2x from "../../../assets/images/how_work/how_work_1_2x.webp";
import how_work_2 from "../../../assets/images/how_work/how_work_2.webp";
import how_work_2_2x from "../../../assets/images/how_work/how_work_2_2x.webp";

const HowWorkFirstBlock = () => {
  console.log(how_work_1);
  return (
    <div className={s.bg__container}>
      <div className={s.container}>
        <div className={s.titcle__center}>
          <h2 className={s.title}>How does it work?</h2>
          <p className={s.under__title}>
            Three easy steps to implement GEO technology{" "}
          </p>
        </div>

        <div className={s.flex__container}>
          <div className={s.images}>
            <img
              className={s.images__first}
              src={how_work_1}
              srcSet={`${how_work_1_2x} 2x`}
              type="image/webp"
              alt={how_work_1}
            />

            <img
              className={s.images__second}
              src={how_work_2}
              srcSet={`${how_work_2_2x} 2x`}
              type="image/webp"
              alt={how_work_2}
            />
          </div>

          <div className={s.description}>
            <p className="page__number">01</p>
            <h3 className="page__title">Registration</h3>
            <p className="page__text">
              At the first stage, our specialists register your business in the
              Google My Business global business directory, as well as in some
              other services. We will collect and publish: basic information
              about your business (description, exact address, photos, phone
              numbers, work schedule), and optimize and customize the profile of
              the institution.
            </p>
            <p className="page__text">
              Our company will be glad to offer you a standard photo session of
              your business. As well as a modern 360° panoramic photo session.
            </p>

            <p className="page__text">
              If your company does not have a website, we will set up a free
              business page for you from Google or a more advanced version from
              Stars Maps.
            </p>

            <p className="page__text">
              Google search provides the user with information about nearby,
              popular, and accessible places. After registration, potential
              visitors can easily find information about your business using
              Google Search, and Google Maps. By registering, you will increase
              the number of new customers and calls for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorkFirstBlock;
