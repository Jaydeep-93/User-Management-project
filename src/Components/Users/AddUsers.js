import Card from '../UI/Card'; 
import classes from './AddUser.module.css'
import Button from './../UI/Button';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={ classes.input }>
      <form onSubmit={addUserHandler}>
        <lebel htmlFor="username">UserName</lebel>
        <input type="text" id="username"></input>

        <lebel htmlFor="age">Age (Years)</lebel>
        <input type="number" id="age"></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
