import "./App.css";
import Dialog from "../lib/Dialog/index";
import { useDialogControls } from "../lib/hooks/useDialogControls";
import { useRef } from "react";
import classes from "./Dialog.module.css";

function App() {
  const { open, openDialog, closeDialog } = useDialogControls();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam
        eaque cupiditate voluptas earum rerum officia quas dolor! Sint quos
        ipsum necessitatibus ut dolor, consectetur esse quaerat. Vero,
        asperiores libero!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam
        eaque cupiditate voluptas earum rerum officia quas dolor! Sint quos
        ipsum necessitatibus ut dolor, consectetur esse quaerat. Vero,
        asperiores libero!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam
        eaque cupiditate voluptas earum rerum officia quas dolor! Sint quos
        ipsum necessitatibus ut dolor, consectetur esse quaerat. Vero,
        asperiores libero!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam
        eaque cupiditate voluptas earum rerum officia quas dolor! Sint quos
        ipsum necessitatibus ut dolor, consectetur esse quaerat. Vero,
        asperiores libero!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam
        eaque cupiditate voluptas earum rerum officia quas dolor! Sint quos
        ipsum necessitatibus ut dolor, consectetur esse quaerat. Vero,
        asperiores libero!
      </p>
      <button onClick={openDialog}>Open</button>
      <Dialog
        open={open}
        ref={dialogRef}
        className={classes.root}
        contentClassName={classes.content}
        contentRef={contentRef}
        handleClose={closeDialog}
        closeOnClickAway
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quasi
          natus quas dolore alias optio tenetur perferendis, cupiditate animi
          ex, omnis quibusdam non est, ullam saepe doloremque aperiam quia.
          Recusandae.
        </p>
        <button onClick={closeDialog}>Close Modal</button>
      </Dialog>
    </main>
  );
}

export default App;
