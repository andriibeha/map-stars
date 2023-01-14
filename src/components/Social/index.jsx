import s from "./Social.module.scss";
import img from "../../assets/images/social/social.webp";
import img2x from "../../assets/images/social/social_2x.webp";

const Social = () => {
  return (
    <section className="section__small">
      <div className={s.container}>
        <div className={s.img__container}>
          <img
            className={s.img}
            src={img}
            srcSet={`${img2x} 2x`}
            type="image/webp"
            alt={img}
            loading="lazy"
          />
        </div>

        <div className={s.description}>
          <h2 className={s.title}>
            Social networks
            <span className={s.title__span}>
              with GEO advertising technology
            </span>
          </h2>

          <p className={s.text}>
            Any business seeks to make a profit through customer satisfaction.
            But satisfying such needs, no business seeks to use the client to
            promote their product or service. This happens on its own, in the
            form of "word of mouth", as it is popularly called. Modern business
            keeps in touch with the client using mobile applications such as
            Instagram, Telegram or Twitter, instant messengers (Viber, Skype,
            WhatsApp), or social networks (Facebook, etc.).
          </p>

          <p className={s.text}>
            What if we offer you a simple technique that will allow you to bring
            more new customers at the expense of old ones, using social networks
            and mobile applications? Moreover, not on the scale of a simple word
            of mouth, but a modern one, using the above social networks and
            mobile applications?
          </p>
          <p className={s.text}>
            With a few simple implementation steps, and simple instructions for
            use and your clients will work for you.
          </p>
          <p className={s.text}>
            Geo advertising from Stars Maps is the word of mouth of our time.
          </p>

          <p className={`${s.text} ${s.text__color}`}>
            GEO technology - word of mouth of the modern digital market!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Social;
