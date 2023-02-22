import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

// 사용자가 이름과 나이을 입력할 수 있게 하는 창과 그 모든 것을 확인하는 버튼
export function AddUser() {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years )</label>
        <input id="age" type="Number" />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
