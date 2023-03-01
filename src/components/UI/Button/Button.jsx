import React from "react";
import classNames from "classnames";

import classes from "./Button.module.css";

const Button = ({ className, type, onClick, disabled, children }) => {
  console.log("Button RUNNING");
  return (
    <button
      type={type || "button"}
      className={classNames(classes.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
