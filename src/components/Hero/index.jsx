import s from "./Hero.module.scss";
import img from "../../assets/images/hero/hero_girl.webp";
import img2x from "../../assets/images/hero/hero_girl_2x.webp";

const Hero = () => {
  return (
    <section className="section">
      <div className={s.container}>
        <div className={s.description}>
          <h1 className={s.title}>MapStars Technology</h1>
          <p className={s.text}>
            Get new customers regularly with the help of modern technologies
          </p>
          {/* ЗРОБИТИ КНОПКУ ОДНИМ КОМПОНЕНТОМ ЯКИЙ МОЖНА НАСТРОЮВАТИ */}
          <button>Get started</button>
        </div>

        <div className={s.images}>
          <div className={s.big__circle}>
            <div className={s.small__circle}>
              <img src={img} srcSet={`${img2x} 2x`} type="image/webp" />
            </div>
          </div>
          <img src={img} srcSet={`${img2x} 2x`} type="image/webp" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
