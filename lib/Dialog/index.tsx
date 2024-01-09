import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from "react";
import { useClickAwayListener } from "../hooks/useClickAwayListener";
import classes from "./styles.module.css";
import DialogContent from "./DialogContent";
import { cn } from "../utils";

interface IProps {
  open: boolean;
  handleClose: () => void;
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  closeOnClickAway?: boolean;
  contentRef?: React.RefObject<HTMLDivElement>;
}

const Dialog = forwardRef<HTMLDialogElement, IProps>(
  (
    {
      open,
      handleClose,
      className,
      children,
      contentClassName,
      closeOnClickAway,
      contentRef
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const mergedRef = useMemo(
      () =>
        ref ? (ref as React.MutableRefObject<HTMLDialogElement>) : dialogRef,
      [ref]
    );

    const closeModal = useCallback(() => {
      mergedRef.current?.close();
      handleClose();
    }, [handleClose, mergedRef]);

    useClickAwayListener(
      mergedRef.current,
      Boolean(closeOnClickAway && open),
      closeModal
    );

    useEffect(() => {
      if (open) mergedRef.current?.showModal();
      else closeModal();
    }, [open, closeModal, mergedRef]);

    return (
      <dialog
        ref={mergedRef}
        onClose={closeModal}
        className={cn(className, classes.dialog)}
      >
        <DialogContent
          ref={contentRef}
          className={cn(contentClassName, classes.dialog_content)}
        >
          {children}
        </DialogContent>
      </dialog>
    );
  }
);

export default Dialog;
