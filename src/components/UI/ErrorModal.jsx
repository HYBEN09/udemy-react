import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay = ({ onConfirm, title, message }) => {
  return (
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
  );
};

export function ErrorModal({ onConfirm, title, message }) {
  const backdropRoot = document.getElementById("backdrop-root");
  const overlayRoot = document.getElementById("overlay-root");

  return (
    <>
      {/* Portal */}
      {createPortal(<Backdrop onConfirm={onConfirm} />, backdropRoot)}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        overlayRoot
      )}
    </>
  );
}

export default ErrorModal;
