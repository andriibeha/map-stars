import s from "./Services.module.scss";
import services_booking from "../../assets/images/services/services_booking.webp";
import services_booking2x from "../../assets/images/services/services_booking_2x.webp";
import services_facebook from "../../assets/images/services/services_facebook.webp";
import services_facebook2x from "../../assets/images/services/services_facebook_2x.webp";
import services_google_maps from "../../assets/images/services/services_google_maps.webp";
import services_google_maps2x from "../../assets/images/services/services_google_maps_2x.webp";
import services_instagram from "../../assets/images/services/services_instagram.webp";
import services_instagram2x from "../../assets/images/services/services_instagram_2x.webp";
import services_linkedin from "../../assets/images/services/services_linkedin.webp";
import services_linkedin2x from "../../assets/images/services/services_linkedin_2x.webp";
import services_street_view from "../../assets/images/services/services_street_view.webp";
import services_street_view2x from "../../assets/images/services/services_street_view_2x.webp";
import services_telegram from "../../assets/images/services/services_telegram.webp";
import services_telegram2x from "../../assets/images/services/services_telegram_2x.webp";
import services_twiter from "../../assets/images/services/services_twiter.webp";
import services_twiter2x from "../../assets/images/services/services_twiter_2x.webp";
import services_whatsap from "../../assets/images/services/services_whatsap.webp";
import services_whatsap2x from "../../assets/images/services/services_whatsap_2x.webp";

const Services = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={`${s.item1} ${s.item}`}>
            <img
              className={s.img__1}
              src={services_twiter}
              srcSet={`${services_twiter2x} 2x`}
              type="image/webp"
              alt={services_twiter}
            />
          </li>

          <li className={`${s.item2} ${s.item}`}>
            <img
              className={s.img__2}
              src={services_whatsap}
              srcSet={`${services_whatsap2x} 2x`}
              type="image/webp"
              alt={services_whatsap}
            />
          </li>

          <li className={`${s.item3} ${s.item}`}>
            <img
              className={s.img__3}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>

          <li className={`${s.item4} ${s.item}`}>
            <img
              className={s.img__4}
              src={services_booking}
              srcSet={`${services_booking2x} 2x`}
              type="image/webp"
              alt={services_booking}
            />
          </li>

          <li className={`${s.item5} ${s.item}`}>
            <img
              className={s.img_5}
              src={services_facebook}
              srcSet={`${services_facebook2x} 2x`}
              type="image/webp"
              alt={services_facebook}
            />
          </li>

          <li className={`${s.item6} ${s.item}`}>
            <img
              className={s.img__6}
              src={services_telegram}
              srcSet={`${services_telegram2x} 2x`}
              type="image/webp"
              alt={services_telegram}
            />
          </li>

          <li className={`${s.item7} ${s.item}`}>
            <img
              className={s.img__7}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>
          {/* RIGHTH SIDE */}
          <li className={`${s.item8} ${s.item}`}>
            <img
              className={s.img__8}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>

          <li className={`${s.item9} ${s.item}`}>
            <img
              className={s.img__9}
              src={services_street_view}
              srcSet={`${services_street_view2x} 2x`}
              type="image/webp"
              alt={services_street_view}
            />
          </li>

          <li className={`${s.item10} ${s.item}`}>
            <img
              className={s.img__10}
              src={services_linkedin}
              srcSet={`${services_linkedin2x} 2x`}
              type="image/webp"
              alt={services_linkedin}
            />
          </li>

          <li className={`${s.item11} ${s.item}`}>
            <img
              className={s.img__11}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>

          <li className={`${s.item12} ${s.item}`}>
            <img
              className={s.img__12}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>

          <li className={`${s.item13} ${s.item}`}>
            <img
              className={s.img__13}
              src={services_instagram}
              srcSet={`${services_instagram2x} 2x`}
              type="image/webp"
              alt={services_instagram}
            />
          </li>

          <li className={`${s.item14} ${s.item}`}>
            <img
              className={s.img__14}
              src={services_google_maps}
              srcSet={`${services_google_maps2x} 2x`}
              type="image/webp"
              alt={services_google_maps}
            />
          </li>
        </ul>

        <div className={s.title__container}>
          <h2 className={s.title}>30+</h2>
          <h3 className={s.under__title}>We work with such services</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
