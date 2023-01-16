import s from "./Technology.module.scss";
import hero_arrow_b from "../../assets/images/hero/hero_arrow_b.webp";
import action from "../../assets/images/action.webp";
import technology_1 from "../../assets/images/technology/technology_1.webp";
import technology_1_2x from "../../assets/images/technology/technology_1_2x.webp";
import technology_2 from "../../assets/images/technology/technology_2.webp";
import technology_2_2x from "../../assets/images/technology/technology_2_2x.webp";
import technology_3 from "../../assets/images/technology/technology_3.webp";
import technology_3_2x from "../../assets/images/technology/technology_3_2x.webp";
import technology_4 from "../../assets/images/technology/technology_4.webp";
import technology_4_2x from "../../assets/images/technology/technology_4_2x.webp";
import technology_line_l from "../../assets/images/technology/technology_line_l.webp";
import technology_line_l_2x from "../../assets/images/technology/technology_line_l_2x.webp";
import technology_line_r from "../../assets/images/technology/technology_line_r.webp";
import technology_line_r_2x from "../../assets/images/technology/technology_line_r_2x.webp";

const Technology = () => {
  return (
    <section className="section__small">
      <div className={s.container} id="technology">
        <div className={s.action}>
          <img src={action} alt="scroll down" className={s.action__text} />
          <img
            src={hero_arrow_b}
            alt="hero_arrow_b"
            className={s.action__arrow}
          />
        </div>

        <div className={s.flex__container}>
          <div className={s.img}>
            <img
              className={s.img__one}
              src={technology_1}
              srcSet={`${technology_1_2x} 2x`}
              type="image/webp"
              alt={technology_1}
              loading="lazy"
            />
            <img
              className={s.img__two}
              src={technology_2}
              srcSet={`${technology_2_2x} 2x`}
              type="image/webp"
              alt={technology_2}
              loading="lazy"
            />
            <img
              className={s.img__three}
              src={technology_3}
              srcSet={`${technology_3_2x} 2x`}
              type="image/webp"
              alt={technology_3}
              loading="lazy"
            />
            <img
              className={s.img__four}
              src={technology_4}
              srcSet={`${technology_4_2x} 2x`}
              type="image/webp"
              alt={technology_4}
              loading="lazy"
            />
            <img
              className={s.arrow__l}
              src={technology_line_l}
              srcSet={`${technology_line_l_2x} 2x`}
              type="image/webp"
              alt={technology_line_l}
              loading="lazy"
            />
            <img
              className={s.arrow__r}
              src={technology_line_r}
              srcSet={`${technology_line_r_2x} 2x`}
              type="image/webp"
              alt={technology_4}
              loading="lazy"
            />
          </div>

          <div className={s.description}>
            <h2 className={s.title}>Technology</h2>
            <h3 className={s.text__title}>
              GEO advertising is a technology for the automatic promotion of a
              business using modern technologies and services.
            </h3>
            <p className={s.text}>
              The technology is specially made to promote almost all types of
              businesses. Cafes, restaurants, beauty salons and hairdressers,
              hotels and hostels, service stations and tire shops, repair
              service centers, online stores, grocery stores, supermarkets,
              photo studios, publishing houses, confectioneries, and many others
              have already used the technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
