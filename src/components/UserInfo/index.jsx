import "./UserInfo.scss";
import img1 from "../../assets/images/user_info/user_info_1.webp";
import img12x from "../../assets/images/user_info/user_info_1_2x.webp";

const UserInfo = () => {
  return (
    <section className="section__small">
      <div className="user-info__container user-info__margin__bottom">
        <div className="user-info__description">
          <p className="user-info__upper__title">Useful information</p>
          <h2 className="user-info__title">How does Google Search work?</h2>
          <p className="user-info__text">
            Today, the largest search resource on the planet is Google Search.
            It is practically a monopoly in the field of information search.
            That is why our company, when creating its GEO advertising
            technology, used this system as a basis. Let's figure out together
            how exactly Google Search works. When a user enters a search query,
            Google Search processes it in less than one second and returns the
            search results in a specific sequence. Android phones, 75% of phones
            based on other systems, as well as laptops and home computers use
            Google in one or another way.
          </p>
        </div>

        <div className="user-info__img__container">
          <img
            className="user-info__img"
            src={img1}
            srcSet={`${img12x} 2x`}
            type="image/webp"
            alt={img1}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
