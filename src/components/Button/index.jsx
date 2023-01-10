import s from "./Button.module.scss";

const Button = (props) => {
  const { text } = props;

  return (
    <button type="button" className={s.button}>
      <p className={s.text}>{text ? text : "Get started"}</p>
    </button>
  );
};

export default Button;
