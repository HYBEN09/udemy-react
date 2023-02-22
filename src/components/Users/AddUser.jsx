import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

//* 사용자가 이름과 나이을 입력할 수 있게 하는 창과 그 모든 것을 확인하는 버튼
export function AddUser(props) {
  //모든 키보드의 입력 상태를 업데이트하고 사용자가 입력하는 것을 state 변수에 저장
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    //*유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    //나이값은 숫자가 아닌 문자열로 반환이 되어 안전하게 +enteredAge하여 숫자형으로 바꿔줌.
    if (+enteredAge < 1) {
      return;
    }
    //Add User 버튼이 클릭될 때마다 그 입력된 데이터들을 App 컴포넌트로 내보냅니다
    props.onAddUser(enteredUsername, enteredAge);

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
