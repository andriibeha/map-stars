import s from "./Footer.module.scss";
import logo from "../../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="section__small">
      <div className={s.container}>
        <div className={s.container__flex}>
          <img src={logo} alt="logo" className={s.logo} />
          <ul className={s.button__list}>
            <li className={s.button__item}>
              <a href="/privacy-policy" className={s.button__link}>
                Privacy Policy
              </a>
            </li>

            <li className={s.button__item}>
              <a href="/terms-of-service" className={s.button__link}>
                Terms of Service
              </a>
            </li>

            <li className={s.button__item}>
              <a href="/schedule-a-call" className={s.button__link}>
                Schedule a Call
              </a>
            </li>
          </ul>

          <ul className={s.icon__list}>
            <li className={s.icon__item}>
              <a href="https://www.facebook.com/" target="blank">
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.999 0.00416129L8.40546 0C5.49173 0 3.60874 1.93188 3.60874 4.92198V7.19134H1.00107C0.775735 7.19134 0.593262 7.37402 0.593262 7.59935V10.8874C0.593262 11.1127 0.775943 11.2952 1.00107 11.2952H3.60874V19.592C3.60874 19.8173 3.79121 19.9998 4.01655 19.9998H7.41882C7.64415 19.9998 7.82663 19.8171 7.82663 19.592V11.2952H10.8756C11.1009 11.2952 11.2834 11.1127 11.2834 10.8874L11.2847 7.59935C11.2847 7.49116 11.2416 7.38754 11.1652 7.31097C11.0889 7.23441 10.9848 7.19134 10.8766 7.19134H7.82663V5.26757C7.82663 4.34293 8.04697 3.87354 9.25145 3.87354L10.9986 3.87291C11.2237 3.87291 11.4062 3.69023 11.4062 3.46511V0.411968C11.4062 0.18705 11.2239 0.00457742 10.999 0.00416129Z"
                    fill="#676C7A"
                  />
                </svg>
              </a>
            </li>

            <li className={s.icon__item}>
              <a href="https://twitter.com/" target="blank">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2.79908C19.2639 3.12525 18.474 3.34646 17.6441 3.44522C18.4915 2.9378 19.1401 2.13297 19.4475 1.17689C18.6527 1.64679 17.7754 1.988 16.8405 2.17297C16.0919 1.37437 15.0271 0.876953 13.8461 0.876953C11.5803 0.876953 9.7431 2.71411 9.7431 4.97868C9.7431 5.29986 9.77935 5.61355 9.84935 5.91352C6.44 5.74228 3.41683 4.10885 1.39346 1.62679C1.03977 2.23169 0.838562 2.93653 0.838562 3.68891C0.838562 5.11241 1.56343 6.36842 2.66324 7.10326C1.99085 7.08078 1.35846 6.89581 0.804837 6.58836V6.6396C0.804837 8.62672 2.21957 10.2852 4.09546 10.6626C3.75176 10.7551 3.38935 10.8063 3.01441 10.8063C2.74948 10.8063 2.49327 10.7801 2.24206 10.7301C2.76444 12.361 4.27918 13.547 6.07386 13.5796C4.67036 14.6794 2.90069 15.333 0.978562 15.333C0.647386 15.333 0.321176 15.313 0 15.2768C1.81591 16.4428 3.97176 17.1227 6.28882 17.1227C13.8361 17.1227 17.9616 10.8713 17.9616 5.44986L17.9479 4.91872C18.754 4.34378 19.4513 3.62143 20 2.79908Z"
                    fill="#676C7A"
                  />
                </svg>
              </a>
            </li>

            <li className={s.icon__item}>
              <a href="https://www.instagram.com/" target="blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_144_677)">
                    <path
                      d="M14.4805 0H5.51913C2.47588 0 0 2.476 0 5.51924V14.4806C0 17.524 2.47588 19.9999 5.51913 19.9999H14.4805C17.524 19.9999 19.9999 17.5239 19.9999 14.4806V5.51924C20 2.476 17.524 0 14.4805 0ZM18.2255 14.4806C18.2255 16.5455 16.5455 18.2254 14.4806 18.2254H5.51913C3.45433 18.2255 1.77449 16.5455 1.77449 14.4806V5.51924C1.77449 3.45445 3.45433 1.77449 5.51913 1.77449H14.4805C16.5454 1.77449 18.2254 3.45445 18.2254 5.51924V14.4806H18.2255Z"
                      fill="#676C7A"
                    />
                    <path
                      d="M10.0001 4.84668C7.15848 4.84668 4.84668 7.15848 4.84668 10.0001C4.84668 12.8417 7.15848 15.1534 10.0001 15.1534C12.8418 15.1534 15.1536 12.8417 15.1536 10.0001C15.1536 7.15848 12.8418 4.84668 10.0001 4.84668ZM10.0001 13.3788C8.13705 13.3788 6.62117 11.8631 6.62117 10C6.62117 8.13681 8.13693 6.62105 10.0001 6.62105C11.8634 6.62105 13.3791 8.13681 13.3791 10C13.3791 11.8631 11.8632 13.3788 10.0001 13.3788Z"
                      fill="#676C7A"
                    />
                    <path
                      d="M15.3697 3.3418C15.0278 3.3418 14.6919 3.48021 14.4505 3.72272C14.2078 3.96405 14.0684 4.30002 14.0684 4.64309C14.0684 4.98509 14.208 5.32094 14.4505 5.56345C14.6918 5.80478 15.0278 5.94438 15.3697 5.94438C15.7127 5.94438 16.0475 5.80478 16.29 5.56345C16.5325 5.32094 16.6709 4.98497 16.6709 4.64309C16.6709 4.30002 16.5325 3.96405 16.29 3.72272C16.0487 3.48021 15.7127 3.3418 15.3697 3.3418Z"
                      fill="#676C7A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_144_677">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>

            <li className={s.icon__item}>
              <a href="https://linkedin.com/" target="blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.0898 5.58984H1.22266V17.2029H5.0898V5.58984Z"
                    fill="#676C7A"
                  />
                  <path
                    d="M17.7809 6.65149C16.9686 5.76475 15.8942 5.32129 14.5584 5.32129C14.0662 5.32129 13.6188 5.38183 13.2164 5.503C12.8141 5.62408 12.4743 5.79397 12.1969 6.01274C11.9196 6.23152 11.6988 6.43461 11.5349 6.62202C11.379 6.80004 11.2265 7.0074 11.0778 7.24198V5.59063H7.22217L7.23399 6.1532C7.24191 6.52832 7.24581 7.68449 7.24581 9.62188C7.24581 11.5594 7.23801 14.0867 7.22233 17.2039H11.0778V10.7233C11.0778 10.325 11.1205 10.0087 11.2066 9.77408C11.3708 9.37544 11.6186 9.0417 11.9508 8.77228C12.283 8.50253 12.695 8.36777 13.1873 8.36777C13.859 8.36777 14.3533 8.60017 14.6698 9.06501C14.9861 9.52981 15.1443 10.1724 15.1443 10.9928V17.2035H18.9997V10.5477C18.9995 8.83664 18.5935 7.53795 17.7809 6.65149Z"
                    fill="#676C7A"
                  />
                  <path
                    d="M3.17964 0C2.53129 0 2.00594 0.189589 1.60349 0.568399C1.20108 0.94729 1 1.42564 1 2.00389C1 2.57405 1.19529 3.05075 1.58593 3.43346C1.97643 3.81621 2.49213 4.00769 3.13273 4.00769H3.15616C3.81248 4.00769 4.34185 3.81637 4.74413 3.43346C5.14642 3.05075 5.34365 2.57421 5.33589 2.00389C5.32809 1.42568 5.12873 0.94729 4.73822 0.568399C4.34776 0.189425 3.82804 0 3.17964 0Z"
                    fill="#676C7A"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;