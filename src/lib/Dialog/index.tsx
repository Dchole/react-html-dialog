import React, { useCallback, useEffect, useRef } from "react";
import { useClickAwayListener } from "../hooks/useClickAwayListener";
import classes from "./index.module.css";

interface IProps {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  closeOnClickAway?: boolean;
}

const Dialog = ({ open, handleClose, children, closeOnClickAway }: IProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = useCallback(() => {
    dialogRef.current?.close();
    handleClose();
  }, [handleClose]);

  useClickAwayListener(
    dialogRef.current,
    Boolean(closeOnClickAway && open),
    closeModal
  );

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
    else closeModal();
  }, [open, closeModal]);

  return (
    <dialog ref={dialogRef} onClose={closeModal} className={classes.dialog}>
      <div className={classes.dialog_content}>{children}</div>
    </dialog>
  );
};

export default Dialog;
