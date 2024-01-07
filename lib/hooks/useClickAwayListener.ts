import { useEffect } from "react";

export const useClickAwayListener = (
  dialogEl: HTMLDialogElement | null,
  enabled: boolean,
  closeModal: (...args: string[]) => void
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickAway = (event: Event) => {
      const target = event.target as HTMLElement;

      if (dialogEl === target) {
        closeModal();
      }
    };

    window.addEventListener("click", handleClickAway);

    return () => {
      window.removeEventListener("click", handleClickAway);
    };
  }, [closeModal, dialogEl, enabled]);

  return;
};
