import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import icon from "../../assets/images/sprites.svg";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <div className={s.header_container}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="logo" />
        </a>

        <nav className={s.navigation}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__item}>
              <a href="/Technology" className={s.navigation__link}>
                Technology
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="/Advantages" className={s.navigation__link}>
                Advantages
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="/How it works" className={s.navigation__link}>
                How it works
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="/Packages" className={s.navigation__link}>
                Packages
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="/Contact" className={s.navigation__link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={s.language}>
          <svg className={s.icon__globus}>
            <use href={icon + "#icon-header_language"}></use>
          </svg>
          <span className={s.language__text}>
            Eng
            <svg className={s.icon__arrow}>
              <use href={icon + "#icon-header_language_arrow"}></use>
            </svg>
          </span>
        </div>

        <Button />
      </div>
    </header>
  );
};

export default Header;
