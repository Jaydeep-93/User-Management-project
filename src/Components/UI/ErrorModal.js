import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const ErrorModalContent = (props) => 
  <div>
    <div className={classes.backdrop} onClick={props.onConfirm} />
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  </div>;


const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ErrorModalContent
          title={props.titel}
          content={props.content}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('error-modal')
      )}
    </>
  );
};

export default ErrorModal;
