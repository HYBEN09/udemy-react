import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

export function ErrorModal({ onConfirm, title, message }) {
  return (
    <Card>
      <div>
        <div className={classes.backdrop} onClick={onConfirm} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p>{message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </Card>
  );
}

export default ErrorModal;
