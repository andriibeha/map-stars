import s from "./Advantages.module.scss";
import advantages_atom from "../../assets/images/advantages/advantages_atom.webp";
import advantages_atom2x from "../../assets/images/advantages/advantages_atom_2x.webp";
import advantages_automation from "../../assets/images/advantages/advantages_automation.webp";
import advantages_automation2x from "../../assets/images/advantages/advantages_automation_2x.webp";
import advantages_implementaion from "../../assets/images/advantages/advantages_implementaion.webp";
import advantages_implementaion2x from "../../assets/images/advantages/advantages_implementaion_2x.webp";
import advantages_like from "../../assets/images/advantages/advantages_like.webp";
import advantages_like2x from "../../assets/images/advantages/advantages_like_2x.webp";
import advantages_price from "../../assets/images/advantages/advantages_price.webp";
import advantages_price2x from "../../assets/images/advantages/advantages_price_2x.webp";
import advantages_time from "../../assets/images/advantages/advantages_time.webp";
import advantages_time2x from "../../assets/images/advantages/advantages_time_2x.webp";

const Advantages = () => {
  return (
    <section className="section__small">
      <div className={s.container} id="advantages">
        <h2 className={s.title}>Advantages</h2>

        <ul className={s.list}>
          <li className={s.item__one}>
            <img
              className={s.icon}
              src={advantages_atom}
              srcSet={`${advantages_atom2x} 2x`}
              type="image/webp"
              alt={advantages_atom}
              loading="lazy"
            />

            <h3 className={s.item__title}>Modern technologies</h3>
            <p className={s.item__text}>
              Thanks to modern technologies, our company has developed a simple
              and effective technology for promoting and developing your
              business. GEO advertising imitates word of mouth, allowing you to
              use the client not only for profit but also to attract new
              customers.
            </p>
          </li>

          <li className={s.item__two}>
            <img
              className={s.icon}
              src={advantages_price}
              srcSet={`${advantages_price2x} 2x`}
              type="image/webp"
              alt={advantages_price}
              loading="lazy"
            />

            <h3 className={s.item__title}>Affordable price</h3>
            <p className={s.item__text}>
              Pay once - get the result constantly. Our pricing policy is very
              flexible, transparent, and affordable. Moreover, it is equally
              accessible to both small and medium-sized and large businesses.
            </p>
          </li>

          <li className={s.item__three}>
            <img
              className={s.icon}
              src={advantages_implementaion}
              srcSet={`${advantages_implementaion2x} 2x`}
              type="image/webp"
              alt={advantages_implementaion}
              loading="lazy"
            />

            <h3 className={s.item__title}>Ease of implementation</h3>
            <p className={s.item__text}>
              Just a few simple implementation steps and GEO advertising starts
              working for your business. After the introduction of technology,
              the main condition for successful work is the fulfillment of three
              elementary tasks by the staff.
            </p>
          </li>

          <li className={s.item__four}>
            <img
              className={s.icon}
              src={advantages_time}
              srcSet={`${advantages_time2x} 2x`}
              type="image/webp"
              alt={advantages_time}
              loading="lazy"
            />

            <h3 className={s.item__title}>An experience</h3>
            <p className={s.item__text}>
              During almost 5 years of individual work and experiments, our
              company has solved many puzzles and problems, and also found a lot
              of pitfalls in working with Internet services. We bring this
              experience to you
            </p>
          </li>

          <li className={s.item__five}>
            <img
              className={s.icon}
              src={advantages_automation}
              srcSet={`${advantages_automation2x} 2x`}
              type="image/webp"
              alt={advantages_automation}
              loading="lazy"
            />

            <h3 className={s.item__title}>Automation</h3>
            <p className={s.item__text}>
              Manage. Plan. Develop. The main principle of GEO advertising from
              Mappers is automation. This is the basis of technology. To
              automate the process of promotion and promotion of the business,
              to allow applying a minimum of effort and get a good result.
            </p>
          </li>

          <li className={s.item__six}>
            <img
              className={s.icon}
              src={advantages_like}
              srcSet={`${advantages_like2x} 2x`}
              type="image/webp"
              alt={advantages_like}
              loading="lazy"
            />

            <h3 className={s.item__title}>Efficiency</h3>
            <p className={s.item__text}>
              Our technology has passed the stages of experimentation, testing,
              and implementation at more than 100 facilities in Ukraine and
              abroad. We have shared the results of our work on our website.
              Cafes, restaurants, hotels, and many other types of businesses are
              already using GEO advertising technology every day.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
