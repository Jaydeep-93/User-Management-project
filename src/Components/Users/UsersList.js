import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={classes.users}>
        {props.users.map((user) => (
          <li key={user.userId}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
