import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, UserAge) => {
    setUserList((prevUsersList) => {
      //prevUsersList에 있는 모든 요소들을 복사
      return [
        ...prevUsersList,
        { name: userName, age: UserAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
