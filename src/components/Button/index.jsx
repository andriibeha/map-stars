import s from "./Button.module.scss";

const Button = (props) => {
  const { text, padding, bg, figure } = props;

  return (
    <button
      type="button"
      className={`${s.button} ${
        bg ? s.button__accent__color : s.button__fecond__color
      } `}
      style={{
        padding: padding,
      }}
    >
      <div className={s.flex__container}>
        <p className={s.text}>{text ? text : "Get started"}</p>
        {figure && <img className={s.figure} src={figure} alt={figure} />}
      </div>
    </button>
  );
};

export default Button;
