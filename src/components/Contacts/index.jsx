import s from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <section className="section__small">
      <div className={s.container}>
        <div className={s.container__flex}>
          <div className={s.contacts__container}>
            <p className={s.uuper__title}>Ready for take-off?</p>
            <h2 className={s.title}>Get in touch</h2>
            <ul className={s.list}>
              <li className={s.item}>
                <a href="tel:+351913448547" className={s.link}>
                  +351 913 448 547
                </a>
              </li>

              <li className={s.item}>
                <a
                  href="tel:+351913448547"
                  className={`${s.link} ${s.link__flex}`}
                >
                  <svg
                    className={s.icon}
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                      fill="#039BE5"
                    />
                    <path
                      d="M6.1286 12.7476L18.1009 8.0574C18.6566 7.85343 19.1419 8.19514 18.9618 9.04886L18.9629 9.04781L16.9244 18.8057C16.7733 19.4975 16.3687 19.6657 15.8027 19.3398L12.6984 17.0152L11.201 18.4808C11.0355 18.6491 10.8958 18.791 10.575 18.791L10.7954 15.5811L16.5487 10.3C16.7992 10.0761 16.4929 9.9499 16.1628 10.1728L9.05286 14.7211L5.98787 13.7496C5.32251 13.5351 5.30802 13.0736 6.1286 12.7476Z"
                      fill="white"
                    />
                  </svg>
                  mapstars
                </a>
              </li>

              <li className={s.item}>
                <a href="mailto:info@mapstars.pt" className={s.link}>
                  info@mapstars.pt
                </a>
              </li>
            </ul>
          </div>

          <div className={s.circle}>
            <button className={s.button} type="button">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
