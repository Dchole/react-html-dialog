import { useCallback, useState } from "react";

export const useDialogControls = () => {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);

  return { open, openDialog, closeDialog };
};
