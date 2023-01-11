import s from "./WhiteCircle.module.scss";

const WhiteCircle = (props) => {
  const {
    img_src,
    img_src_2x,
    img_width,
    small_circle_width,
    big_circle_width,
  } = props;

  return (
    <div
      className={s.big__cirlce}
      style={{
        width: `${big_circle_width}px`,
        height: `${big_circle_width}px`,
      }}
    >
      <div
        className={s.small__circle}
        style={{
          width: `${small_circle_width}px`,
          height: `${small_circle_width}px`,
        }}
      >
        <img
          className={s.img}
          src={img_src}
          srcSet={`${img_src_2x} 2x`}
          type="image/webp"
          alt={img_src}
          style={{ width: `${img_width}px` }}
        />
      </div>
    </div>
  );
};

export default WhiteCircle;
