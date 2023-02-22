import Card from "../UI/Card";
import classes from "./UserList.module.css";

export function UserList(props) {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
