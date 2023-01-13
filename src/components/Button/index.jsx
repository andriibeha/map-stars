import s from "./Button.module.scss";

const Button = (props) => {
  const { text, padding, bg, figure, onClick, type = "button" } = props;

  let styles = {
    padding: padding,
    width: props?.width,
    height: props?.height,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.button} ${
        bg ? s.button__accent__color : s.button__fecond__color
      } `}
      style={styles}
    >
      <div className={s.flex__container}>
        <p className={s.text}>{text ? text : "Get started"}</p>
        {figure && <img className={s.figure} src={figure} alt={figure} />}
      </div>
    </button>
  );
};

export default Button;
