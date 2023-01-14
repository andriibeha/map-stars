import s from "./HowWorkSecondBlock.module.scss";
import how_work_3 from "../../../assets/images/how_work/how_work_3.webp";
import how_work_3_2x from "../../../assets/images/how_work/how_work_3_2x.webp";
import how_work_4 from "../../../assets/images/how_work/how_work_4.webp";
import how_work_4_2x from "../../../assets/images/how_work/how_work_4_2x.webp";

const HowWorkSecondBlock = () => {
  return (
    <div className={s.bg__container}>
      <div className={s.container}>
        <div className={s.flex__container}>
          <div className={s.description}>
            <p className="page__number">02</p>
            <h3 className="page__title">
              The technology of Motivation and Social Recommendations
            </h3>

            <p className="page__text">
              Motivation technology is a proprietary development of our company.
              It is designed to increase the number of reviews and
              recommendations about your business at the expense of old
              customers, which directly affects the number of new customers.
            </p>
            <p className="page__text">
              To implement the technology, we use carriers - motivators. They
              come in various formats: a tabletop, a signboard, a banner, a
              business card, a sticker, a product packaging element, a leaflet,
              and so on. Our task is to integrate the use of the motivator into
              your business process.
            </p>
            <p className="page__text">
              With your help or on your own, the client, using a mobile device,
              read the QR code from the motivator and goes to a special website
              of the institution's complaint. On this page, he will be able to
              share social recommendations and leave feedback about visiting
              your establishment, thus promoting you on the network. Advertising
              messages about your establishment will be distributed on social
              networks (Facebook, Instagram) or in the form of messages via
              instant messengers (Viber, WhatsApp, Telegram).
            </p>
            <p className="page__text">
              The introduction of technology significantly increases the number
              of reviews left on Google Maps, which subsequently increases the
              popularity and frequency of issuance in Google services. Each
              client turns into a tool to attract new visitors, our technology
              is a modern version of word of mouth for your business.
            </p>
          </div>

          <div className={s.images}>
            <img
              className={s.images__first}
              src={how_work_3}
              srcSet={`${how_work_3_2x} 2x`}
              type="image/webp"
              alt={how_work_3}
              loading="lazy"
            />

            <img
              className={s.images__second}
              src={how_work_4}
              srcSet={`${how_work_4_2x} 2x`}
              type="image/webp"
              alt={how_work_4}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorkSecondBlock;
