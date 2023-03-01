import React, { useRef, useImperativeHandle, forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const { id, type, value, onChange, onBlur } = props;
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // useImperativeHandle 훅
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
});

export default Input;
