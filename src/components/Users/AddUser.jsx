import React, { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

//* 사용자가 이름과 나이을 입력할 수 있게 하는 창과 그 모든 것을 확인하는 버튼
export function AddUser({ onAddUser }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    onAddUser(enteredName, enteredUserAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // 오류 모달창이 생겼을 때 Backdrop , Okay 버튼을 클릭하면 에러모달이 사라집니다
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      <div className={classes.backdrop} />
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
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years )</label>
          <input id="age" type="Number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
