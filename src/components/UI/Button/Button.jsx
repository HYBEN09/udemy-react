import classes from "./Button.module.css";
import classNames from "classnames";

export function Button({ children, onClick, disabled, className }) {
  return (
    <button
      type="button"
      className={classNames(classes.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
