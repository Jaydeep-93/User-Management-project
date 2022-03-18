import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "./../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(usernameRef.current.value);
    const entredName = usernameRef.current.value; 
    const entereUerAge = ageRef.current.value
    // console.log(`${enteredUserName} ${enteredAge}`);
    if (entredName.trim().length === 0 || entereUerAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: " please enter valid name and age (non-empty) value",
      });
      return;
    }
    if (+entereUerAge < 1) {
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
      username: entredName,
      age: entereUerAge,
    };
    props.saveUserData(user);

    // setEnteredUserName("");
    // setEnteredAge(0);

    // generally we should not manipulate DOM by react 
    // but this bug is asking for it 
    // so changing DOM content by refs
    usernameRef.current.value = ''; 
    ageRef.current.value = ''; 
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // onChange={usernameChangeHandler}
            // value={enteredUserName}
            ref={usernameRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
