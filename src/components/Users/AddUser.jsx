import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

//* 사용자가 이름과 나이을 입력할 수 있게 하는 창과 그 모든 것을 확인하는 버튼
export function AddUser() {
  //모든 키보드의 입력 상태를 업데이트하고 사용자가 입력하는 것을 state 변수에 저장
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (Years )</label>
        <input
          id="age"
          type="Number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
