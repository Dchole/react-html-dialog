# React HTML-dialog

This library allows you to easily use the HTML `<dialog>` in your react applications.
Uses are similar to most Modal/Dialog libraries except this uses the native `<dialog>` element.

## Installation

You can install `react-html-dialog` via npm or yarn:

```bash
npm install react-html-dialog
# or
yarn add react-html-dialog
```

## How to use

To use the component in your code, you can import the code in your app like this

```ts
import Dialog from "react-html-dialog";
```

Then you render the component with the dialog content as the children.

```tsx
<Dialog open={false} handleClose={closeHandler}>
  <h2>Dialog Title</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quasi natus quas
    dolore alias optio tenetur perferendis, cupiditate animi ex, omnis quibusdam
    non est, ullam saepe doloremque aperiam quia. Recusandae.
  </p>
  <button>Close Modal</button>
</Dialog>
```

The component has two required props `open` and `handleClose`.

`open`: A boolean indicating whether the dialog is open or closed.

`handleClose`: A callback function to handle closing the dialog.

`closeOnClickAway`: An _optional_ prop to close the dialog when clicking outside it

This library also provides you with some hooks you might love to use with the Dialog

```tsx
import Dialog from "react-html-dialog";
import { useDialogControls } from "react-html-dialog/hooks";

function App() {
  const { open, openDialog, closeDialog } = useDialogControls();

  return (
    <>
      <button onClick={openDialog}>Open</button>
      <Dialog open={open} handleClose={closeDialog}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quasi
          natus quas dolore alias optio tenetur perferendis, cupiditate animi
          ex, omnis quibusdam non est, ullam saepe doloremque aperiam quia.
          Recusandae.
        </p>
        <button onClick={closeDialog}>Close Modal</button>
      </Dialog>
    </>
  );
}
```

It's not required to use the hooks from the package but if you find it helpful, why not.

## Styling

Adding styles to the `Dialog` component is as easy as adding styles to the `<dialog>` element.

- Style the backdrop with `dialog::backdrop` selector
- You can style the `dialog` and the `div` element inside to add styles to the modal
- All styling solutions are allowed

## Why `react-html-dialog`?

- Utilizes the native HTML `<dialog>` element for lightweight, accessible modals.
- Offers flexibility in handling dialog states and behavior with the `useDialogControls` hook.
- Seamlessly integrates into React applications without additional dependencies.

## Contributing

We welcome contributions! Feel free to submit bug fixes, suggestions, or feature enhancements through issues and pull requests.

## License

`react-html-dialog` is licensed under the [MIT License](link-to-license-file). Feel free to use, modify, and distribute it as per the terms of the license.
