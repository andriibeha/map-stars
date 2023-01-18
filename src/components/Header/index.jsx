import s from "./Header.module.scss";
import logo from "../../assets/images/logo.webp";
import icon from "../../assets/images/sprites.svg";
import Button from "../Button";
import windowSize from "../../utils/WindowSize";

const Header = ({ onClickButton }) => {
  let mobile = windowSize();

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="logo" loading="lazy" />
        </a>

        <nav className={s.navigation}>
          <ul className={s.navigation__list}>
            <li className={s.navigation__item}>
              <a href="#technology" className={s.navigation__link}>
                Technology
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="#advantages" className={s.navigation__link}>
                Advantages
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="#howWork" className={s.navigation__link}>
                How it works
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="#packages" className={s.navigation__link}>
                Packages
              </a>
            </li>
            <li className={s.navigation__item}>
              <a href="#contacts" className={s.navigation__link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={s.language}>
          <svg className={s.icon__globus}>
            <use href={icon + "#icon-header_language"}></use>
          </svg>
          <span className={s.language__text}>Eng</span>
          <svg className={s.icon__arrow}>
            <use href={icon + "#icon-header_language_arrow"}></use>
          </svg>
        </div>

        {mobile ? (
          <Button padding="9px 15px" bg={true} onClick={onClickButton} />
        ) : (
          <Button padding="18px 40px" bg={true} onClick={onClickButton} />
        )}
      </div>
    </header>
  );
};

export default Header;
