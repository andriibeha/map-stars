import Card from "./Card";
import s from "./Packages.module.scss";
import { card1, card2, card3, card4 } from "./packagesArray";

const Packages = () => {
  return (
    <section className="section">
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.title}>Packages services</h2>

          <ul className={s.list}>
            <li className={s.item}>
              <Card
                headerTitle="My business"
                headerTittlePadding="20px 25px 18px 25px"
                headerText="Suitable for new or small business"
                bodyTitle="The package includes:"
                packagesTextArray={card1}
                headerBg="#F4495C"
              />
            </li>

            <li className={s.item}>
              <Card
                headerTitle="Advanced"
                headerTittlePadding="23px 25px 21px 25px"
                headerText="Promotion with help of the unique technology of motivation"
                bodyTitle="The package includes:"
                packagesTextArray={card2}
                headerBg="#F65859"
              />
            </li>

            <li className={s.item}>
              <Card
                headerTitle="GEO advertising"
                headerTittlePadding="33px 25px 30px 25px"
                headerText="Efficient GEO ads"
                bodyTitle="The package includes:"
                packagesTextArray={card3}
                headerBg="#F76B55"
              />
            </li>

            <li className={s.item}>
              <Card
                headerTitle="Maximum"
                headerTittlePadding="33px 25px 30px 25px"
                headerText="Maximum clients aquisition"
                bodyTitle="The package includes:"
                packagesTextArray={card4}
                headerBg="#F98051"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
