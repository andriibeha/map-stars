import s from "./Card.module.scss";
import img from "../../../assets/images/packages/packages.webp";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Button";

const Card = (props) => {
  const {
    headerTittlePadding,
    headerTitle = "",
    headerText = "",
    bodyTitle = "",
    packagesTextArray,
    headerBg = "#F4495C",
    onClickButton,
  } = props;

  return (
    <ul className={s.list}>
      <li className={s.item} key={uuidv4()}>
        <div
          className={s.item__header}
          style={{ backgroundColor: headerBg, padding: headerTittlePadding }}
        >
          <h3 className={s.item__header__title}>{headerTitle}</h3>
          <p className={s.item__header__text}>{headerText}</p>
        </div>

        <div className={s.flex}>
          <div className={s.item__body}>
            <h4 className={s.item__body__title}>{bodyTitle}</h4>

            <ul className={s.packages__list}>
              {packagesTextArray?.map((item) => (
                <li className={s.packages__item} key={uuidv4()}>
                  <img
                    className={s.packages__item__img}
                    src={img}
                    type="image/webp"
                    alt={img}
                    width={22}
                    height={22}
                  />
                  <p className={s.packages__item__text}>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.button}>
            <Button padding="18px 66px" bg={true} onClick={onClickButton} />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Card;
