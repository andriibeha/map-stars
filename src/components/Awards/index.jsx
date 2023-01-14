import s from "./Awards.module.scss";
import img1 from "../../assets/images/awards/awards_1.webp";
import img1_2x from "../../assets/images/awards/awards_1_2x.webp";
import img2 from "../../assets/images/awards/awards_2.webp";
import img2_2x from "../../assets/images/awards/awards_2_2x.webp";
import img3 from "../../assets/images/awards/awards_3.webp";
import img3_2x from "../../assets/images/awards/awards_3_2x.webp";
import img4 from "../../assets/images/awards/awards_4.webp";
import img4_2x from "../../assets/images/awards/awards_4_2x.webp";
import img5 from "../../assets/images/awards/awards_5.webp";
import img5_2x from "../../assets/images/awards/awards_5_2x.webp";
import img6 from "../../assets/images/awards/awards_6.webp";
import img6_2x from "../../assets/images/awards/awards_6_2x.webp";
import img7 from "../../assets/images/awards/awards_7.webp";
import img7_2x from "../../assets/images/awards/awards_7_2x.webp";
import img8 from "../../assets/images/awards/awards_8.webp";
import img8_2x from "../../assets/images/awards/awards_8_2x.webp";

const Awards = () => {
  return (
    <section className="section__small">
      <div className={s.container}>
        <h2 className={s.title}>Our awards</h2>
        <p className={s.under__titlte}>
          Our company has a number of cities in the service of Google and
          Booking
        </p>

        <ul className={s.list}>
          <li className={s.item}>
            <img
              className={s.img}
              src={img1}
              srcSet={`${img1_2x} 2x`}
              type="image/webp"
              alt={img1}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img2}
              srcSet={`${img2_2x} 2x`}
              type="image/webp"
              alt={img2}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img3}
              srcSet={`${img3_2x} 2x`}
              type="image/webp"
              alt={img3}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img4}
              srcSet={`${img4_2x} 2x`}
              type="image/webp"
              alt={img4}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img5}
              srcSet={`${img5_2x} 2x`}
              type="image/webp"
              alt={img5}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img6}
              srcSet={`${img6_2x} 2x`}
              type="image/webp"
              alt={img6}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img7}
              srcSet={`${img7_2x} 2x`}
              type="image/webp"
              alt={img7}
              loading="lazy"
            />
          </li>

          <li className={s.item}>
            <img
              className={s.img}
              src={img8}
              srcSet={`${img8_2x} 2x`}
              type="image/webp"
              alt={img8}
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
