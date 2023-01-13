import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./SliderBlock.module.scss";
import "./Slider.scss";
import Slider from "react-slick";
import sliderImg1 from "../../assets/images/slider/slider_1.webp";
import sliderImg1_2x from "../../assets/images/slider/slider_1_2x.webp";
import sliderImg2 from "../../assets/images/slider/slider_2.webp";
import sliderImg2_2x from "../../assets/images/slider/slider_2_2x.webp";
import sliderImgCenter from "../../assets/images/slider/slider_center.webp";

const SliderBlock = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="section">
      <div className={s.container}>
        <h2 className={s.title}>Implementation examples</h2>

        <div className={s.slider__container}>
          <Slider {...settings}>
            <div className={s.slider__item}>
              <div className={s.slider__item__flex}>
                <div className={s.slider__img__container}>
                  <div className={s.slider__card1}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <img
                    className={s.slider__img1}
                    src={sliderImg1}
                    srcSet={`${sliderImg1_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg1}
                    height={273}
                  />

                  <img
                    className={s.slider__img2}
                    src={sliderImg2}
                    srcSet={`${sliderImg2_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg2}
                    height={273}
                  />

                  <div className={s.slider__card2}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <div className={s.slider__center__circle}>
                    <img
                      src={sliderImgCenter}
                      srcSet={`${sliderImgCenter} 2x`}
                      type="image/webp"
                      alt={sliderImgCenter}
                      width={66}
                      height={77}
                    />
                  </div>
                </div>

                <div className={s.slider__description__container}>
                  <h4 className={s.description__title}>
                    Car wash Ceramic Pro Latvia
                  </h4>
                  <p className={s.description__text}>
                    Ceramic Pro is the first client of the company in Latvia, as
                    well as the first client abroad.
                  </p>
                  <p className={s.description__text}>
                    After changing the car wash system and approach to working
                    with the client, under the new Ceramic Pro brand, the task
                    was to bring more customers in the 16/17 tourist season than
                    in the 15/16 season.
                  </p>
                  <p className={s.description__text}>
                    The main focus of the photo session/photo presentation was
                    to be the Ceramic Pro logo and new corporate identity, as
                    well as the workflow and higher level of the average
                    customer. This project has become a pilot project for our
                    company in terms of introducing a unique Motivator design
                    with the logo of the client's company. The task was also to
                    orient the issue in Google search for a Russian-speaking
                    tourist/client.{" "}
                  </p>

                  <p className={s.description__text}>
                    The result was not long in coming, already in the next 16/17
                    season in Jurmala, 17% more customers turned to the car wash
                    than in the 15/16 season. According to our forecasts, they
                    should grow up to 25% over the next
                  </p>
                </div>
              </div>
            </div>

            <div className={s.slider__item}>
              <div className={s.slider__item__flex}>
                <div className={s.slider__img__container}>
                  <div className={s.slider__card1}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <img
                    className={s.slider__img1}
                    src={sliderImg1}
                    srcSet={`${sliderImg1_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg1}
                    height={273}
                  />

                  <img
                    className={s.slider__img2}
                    src={sliderImg2}
                    srcSet={`${sliderImg2_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg2}
                    height={273}
                  />

                  <div className={s.slider__card2}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <div className={s.slider__center__circle}>
                    <img
                      src={sliderImgCenter}
                      srcSet={`${sliderImgCenter} 2x`}
                      type="image/webp"
                      alt={sliderImgCenter}
                      width={66}
                      height={77}
                    />
                  </div>
                </div>

                <div className={s.slider__description__container}>
                  <h4 className={s.description__title}>
                    Car wash Ceramic Pro Latvia
                  </h4>
                  <p className={s.description__text}>
                    Ceramic Pro is the first client of the company in Latvia, as
                    well as the first client abroad.
                  </p>
                  <p className={s.description__text}>
                    After changing the car wash system and approach to working
                    with the client, under the new Ceramic Pro brand, the task
                    was to bring more customers in the 16/17 tourist season than
                    in the 15/16 season.
                  </p>
                  <p className={s.description__text}>
                    The main focus of the photo session/photo presentation was
                    to be the Ceramic Pro logo and new corporate identity, as
                    well as the workflow and higher level of the average
                    customer. This project has become a pilot project for our
                    company in terms of introducing a unique Motivator design
                    with the logo of the client's company. The task was also to
                    orient the issue in Google search for a Russian-speaking
                    tourist/client.{" "}
                  </p>

                  <p className={s.description__text}>
                    The result was not long in coming, already in the next 16/17
                    season in Jurmala, 17% more customers turned to the car wash
                    than in the 15/16 season. According to our forecasts, they
                    should grow up to 25% over the next
                  </p>
                </div>
              </div>
            </div>

            <div className={s.slider__item}>
              <div className={s.slider__item__flex}>
                <div className={s.slider__img__container}>
                  <div className={s.slider__card1}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <img
                    className={s.slider__img1}
                    src={sliderImg1}
                    srcSet={`${sliderImg1_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg1}
                    height={273}
                  />

                  <img
                    className={s.slider__img2}
                    src={sliderImg2}
                    srcSet={`${sliderImg2_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg2}
                    height={273}
                  />

                  <div className={s.slider__card2}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <div className={s.slider__center__circle}>
                    <img
                      src={sliderImgCenter}
                      srcSet={`${sliderImgCenter} 2x`}
                      type="image/webp"
                      alt={sliderImgCenter}
                      width={66}
                      height={77}
                    />
                  </div>
                </div>

                <div className={s.slider__description__container}>
                  <h4 className={s.description__title}>
                    Car wash Ceramic Pro Latvia
                  </h4>
                  <p className={s.description__text}>
                    Ceramic Pro is the first client of the company in Latvia, as
                    well as the first client abroad.
                  </p>
                  <p className={s.description__text}>
                    After changing the car wash system and approach to working
                    with the client, under the new Ceramic Pro brand, the task
                    was to bring more customers in the 16/17 tourist season than
                    in the 15/16 season.
                  </p>
                  <p className={s.description__text}>
                    The main focus of the photo session/photo presentation was
                    to be the Ceramic Pro logo and new corporate identity, as
                    well as the workflow and higher level of the average
                    customer. This project has become a pilot project for our
                    company in terms of introducing a unique Motivator design
                    with the logo of the client's company. The task was also to
                    orient the issue in Google search for a Russian-speaking
                    tourist/client.{" "}
                  </p>

                  <p className={s.description__text}>
                    The result was not long in coming, already in the next 16/17
                    season in Jurmala, 17% more customers turned to the car wash
                    than in the 15/16 season. According to our forecasts, they
                    should grow up to 25% over the next
                  </p>
                </div>
              </div>
            </div>

            <div className={s.slider__item}>
              <div className={s.slider__item__flex}>
                <div className={s.slider__img__container}>
                  <div className={s.slider__card1}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <img
                    className={s.slider__img1}
                    src={sliderImg1}
                    srcSet={`${sliderImg1_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg1}
                    height={273}
                  />

                  <img
                    className={s.slider__img2}
                    src={sliderImg2}
                    srcSet={`${sliderImg2_2x} 2x`}
                    type="image/webp"
                    alt={sliderImg2}
                    height={273}
                  />

                  <div className={s.slider__card2}>
                    <p className={s.slider__card__text}>
                      Increase in the flow of customers
                    </p>
                    <h3 className={s.slider__card__title}>+40%</h3>
                  </div>

                  <div className={s.slider__center__circle}>
                    <img
                      src={sliderImgCenter}
                      srcSet={`${sliderImgCenter} 2x`}
                      type="image/webp"
                      alt={sliderImgCenter}
                      width={66}
                      height={77}
                    />
                  </div>
                </div>

                <div className={s.slider__description__container}>
                  <h4 className={s.description__title}>
                    Car wash Ceramic Pro Latvia
                  </h4>
                  <p className={s.description__text}>
                    Ceramic Pro is the first client of the company in Latvia, as
                    well as the first client abroad.
                  </p>
                  <p className={s.description__text}>
                    After changing the car wash system and approach to working
                    with the client, under the new Ceramic Pro brand, the task
                    was to bring more customers in the 16/17 tourist season than
                    in the 15/16 season.
                  </p>
                  <p className={s.description__text}>
                    The main focus of the photo session/photo presentation was
                    to be the Ceramic Pro logo and new corporate identity, as
                    well as the workflow and higher level of the average
                    customer. This project has become a pilot project for our
                    company in terms of introducing a unique Motivator design
                    with the logo of the client's company. The task was also to
                    orient the issue in Google search for a Russian-speaking
                    tourist/client.{" "}
                  </p>

                  <p className={s.description__text}>
                    The result was not long in coming, already in the next 16/17
                    season in Jurmala, 17% more customers turned to the car wash
                    than in the 15/16 season. According to our forecasts, they
                    should grow up to 25% over the next
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderBlock;
