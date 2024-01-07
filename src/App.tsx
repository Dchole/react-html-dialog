import "./App.css";
import Dialog from "../lib/Dialog/index";
import { useDialogControls } from "../lib/hooks/useDialogControls";

function App() {
  const { open, openDialog, closeDialog } = useDialogControls();

  return (
    <main>
      <button onClick={openDialog}>Open</button>
      <Dialog open={open} handleClose={closeDialog} closeOnClickAway>
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
