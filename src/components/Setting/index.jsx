import s from "./Setting.module.scss";
import img1 from "../../assets/images/setting/setting_1.webp";
import img1_2x from "../../assets/images/setting/setting_1_2x.webp";
import img2 from "../../assets/images/setting/setting_2.webp";
import img2_2x from "../../assets/images/setting/setting_2_2x.webp";
import { useState } from "react";

const Setting = () => {
  const [active, setActive] = useState(true);

  const onButtonClick = (e) => {
    const target = e.currentTarget;

    if (target) {
      if (target.className === "settings__item__button__active") {
        return;
      }
      setActive(!active);
    }
  };

  return (
    <section className="section">
      <div className={s.container}>
        <div className={s.description__container}>
          <h2 className={s.title}>Setting up</h2>
          <ul className={s.list__button}>
            <li className={s.item__button}>
              <button
                onClick={(e) => onButtonClick(e)}
                className={active ? "settings__item__button__active" : ""}
                type="button"
              >
                AdWords ads
              </button>
            </li>
            <li className={s.item__button}>
              <button
                onClick={(e) => onButtonClick(e)}
                type="button"
                className={active ? "" : "settings__item__button__active"}
              >
                Booking.com
              </button>
            </li>
          </ul>

          {active ? (
            <>
              <p className={s.text}>
                Any business seeks to make a profit through customer
                satisfaction. But satisfying such needs, no business seeks to
                use the client to promote their product or service. This happens
                on its own, in the form of "word of mouth", as it is popularly
                called. Modern business keeps in touch with the client using
                mobile applications such as Instagram, Telegram or Twitter,
                instant messengers (Viber, Skype, WhatsApp), or social networks
                (Facebook, etc.).
              </p>

              <p className={s.text}>
                What if we offer you a simple technique that will allow you to
                bring more new customers at the expense of old ones, using
                social networks and mobile applications? Moreover, not on the
                scale of a simple word of mouth, but a modern one, using the
                above social networks and mobile applications?
              </p>

              <p className={s.text}>
                With a few simple implementation steps, and simple instructions
                for use and your clients will work for you.
              </p>
            </>
          ) : (
            <>
              <p className={s.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, neque numquam voluptates mollitia voluptatum et fuga
                eius dolor, deserunt iusto rerum quos nesciunt doloremque
                doloribus inventore assumenda explicabo. Placeat, quasi?
              </p>

              <p className={s.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, neque numquam voluptates mollitia voluptatum et fuga
                eius dolor, deserunt iusto rerum quos nesciunt doloremque
                doloribus inventore assumenda explicabo. Placeat, quasi?
              </p>

              <p className={s.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, neque numquam voluptates mollitia voluptatum et fuga
                eius dolor, deserunt iusto rerum quos nesciunt doloremque
                doloribus inventore assumenda explicabo. Placeat, quasi?
              </p>
            </>
          )}
        </div>

        <img
          className={s.img1}
          src={img1}
          srcSet={`${img1_2x} 2x`}
          type="image/webp"
          alt={img1}
          loading="lazy"
        />

        <img
          className={s.img2}
          src={img2}
          srcSet={`${img2_2x} 2x`}
          type="image/webp"
          alt={img2}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Setting;
