import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "./../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(`${enteredUserName} ${enteredAge}`);
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: " please enter valid name and age (non-empty) value",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: " please enter valid age (> 0)",
      });
      return;
    }
    // do something for data got from event
    // send it to parent
    const user = {
      userId: Math.random().toString(),
      username: enteredUserName,
      age: enteredAge,
    };
    props.saveUserData(user);

    setEnteredUserName("");
    setEnteredAge(0);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
