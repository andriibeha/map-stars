import s from "./Hero.module.scss";
import girl from "../../assets/images/hero/hero_girl.webp";
import girl2x from "../../assets/images/hero/hero_girl_2x.webp";
import hero_faceboock from "../../assets/images/hero/hero_faceboock.webp";
import hero_faceboock2x from "../../assets/images/hero/hero_faceboock_2x.webp";
import hero_google from "../../assets/images/hero/hero_google.webp";
import hero_google2x from "../../assets/images/hero/hero_google_2x.webp";
import hero_google_ads from "../../assets/images/hero/hero_google_ads.png";
import hero_google_ads2x from "../../assets/images/hero/hero_google_ads_2x.png";
import hero_google_maps from "../../assets/images/hero/hero_google_maps.webp";
import hero_google_maps2x from "../../assets/images/hero/hero_google_maps_2x.webp";
import hero_instagram from "../../assets/images/hero/hero_instagram.webp";
import hero_instagram2x from "../../assets/images/hero/hero_instagram_2x.webp";
import hero_linkedin from "../../assets/images/hero/hero_linkedin.webp";
import hero_linkedin2x from "../../assets/images/hero/hero_linkedin_2x.webp";
import hero_street_view from "../../assets/images/hero/hero_street_view.webp";
import hero_street_view2x from "../../assets/images/hero/hero_street_view_2x.webp";
import hero_telegram from "../../assets/images/hero/hero_telegram.webp";
import hero_telegram2x from "../../assets/images/hero/hero_telegram_2x.webp";
import hero_twitter from "../../assets/images/hero/hero_twitter.webp";
import hero_twitter2x from "../../assets/images/hero/hero_twitter_2x.webp";
import hero_watsap from "../../assets/images/hero/hero_watsap.webp";
import hero_watsap2x from "../../assets/images/hero/hero_watsap_2x.webp";
import hero_arrow_r from "../../assets/images/hero/hero_arrow_r.webp";
import WhiteCircle from "../WhiteCircle";
import Button from "../Button";

const Hero = ({ onClickButton }) => {
  return (
    <section className="section">
      <div className={s.container}>
        <div className={s.elipse__first}></div>
        <div className={s.elipse__second}></div>
        <div className={s.elipse__three}></div>

        <div className={s.description}>
          <h1 className={s.title}>MapStars Technology</h1>
          <p className={s.text}>
            Get new customers regularly with the help of modern technologies
          </p>
          <Button
            padding="22px 50px"
            bg={false}
            figure={hero_arrow_r}
            onClick={onClickButton}
          />
        </div>

        <div className={s.images}>
          <ul className={s.images__list}>
            <li className={s.images__street_view}>
              <WhiteCircle
                img_src={hero_street_view}
                img_src_2x={hero_street_view2x}
                img_width={50}
                small_circle_width={67}
                big_circle_width={78}
              />
            </li>

            <li className={s.images__google_maps}>
              <WhiteCircle
                img_src={hero_google_maps}
                img_src_2x={hero_google_maps2x}
                img_width={61}
                small_circle_width={94}
                big_circle_width={111}
              />
            </li>

            <li className={s.images__twitter}>
              <WhiteCircle
                img_src={hero_twitter}
                img_src_2x={hero_twitter2x}
                img_width={29}
                small_circle_width={52}
                big_circle_width={65}
              />
            </li>

            <li className={s.images__telegram}>
              <WhiteCircle
                img_src={hero_telegram}
                img_src_2x={hero_telegram2x}
                img_width={60}
                small_circle_width={93}
                big_circle_width={106}
              />
            </li>

            <li className={s.images__google}>
              <WhiteCircle
                img_src={hero_google}
                img_src_2x={hero_google2x}
                img_width={52}
                small_circle_width={96}
                big_circle_width={112}
              />
            </li>
            {/* RIGTH SIDE */}
            <li className={s.images__faceboock}>
              <WhiteCircle
                img_src={hero_faceboock}
                img_src_2x={hero_faceboock2x}
                img_width={42}
                small_circle_width={83}
                big_circle_width={96}
              />
            </li>

            <li className={s.images__linkedin}>
              <WhiteCircle
                img_src={hero_linkedin}
                img_src_2x={hero_linkedin2x}
                img_width={21}
                small_circle_width={52}
                big_circle_width={65}
              />
            </li>

            <li className={s.images__watsap}>
              <WhiteCircle
                img_src={hero_watsap}
                img_src_2x={hero_watsap2x}
                img_width={51}
                small_circle_width={99}
                big_circle_width={118}
              />
            </li>

            <li className={s.images__google_ads}>
              <WhiteCircle
                img_src={hero_google_ads}
                img_src_2x={hero_google_ads2x}
                img_width={62}
                small_circle_width={81}
                big_circle_width={94}
              />
            </li>

            <li className={s.images__instagram}>
              <WhiteCircle
                img_src={hero_instagram}
                img_src_2x={hero_instagram2x}
                img_width={55}
                small_circle_width={101}
                big_circle_width={120}
              />
            </li>

            <li className={s.images__girl}>
              <img
                src={girl}
                srcSet={`${girl2x} 2x`}
                type="image/webp"
                alt="girl"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
