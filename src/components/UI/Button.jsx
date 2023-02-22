import classes from "./Button.module.css";

function Button(props) {
  const { type, onClick, children } = props;

  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
