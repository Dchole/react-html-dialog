import "./App.css";
import Modal from "./lib/Modal/index";
import { useDialogControls } from "./lib/hooks/useDialogControls";

function App() {
  const { isOpen, openDialog, closeDialog } = useDialogControls();

  return (
    <main>
      <button onClick={openDialog}>Open</button>
      <Modal isOpen={isOpen} handleClose={closeDialog}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quasi
          natus quas dolore alias optio tenetur perferendis, cupiditate animi
          ex, omnis quibusdam non est, ullam saepe doloremque aperiam quia.
          Recusandae.
        </p>
        <button onClick={closeDialog}>Close Modal</button>
      </Modal>
    </main>
  );
}

export default App;
