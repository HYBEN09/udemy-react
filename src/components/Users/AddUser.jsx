// 사용자가 이름과 나이을 입력할 수 있게 하는 창과 그 모든 것을 확인하는 버튼

const addUserHandler = (e) => {
  e.preventDefault();
};

export function AddUser() {
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />

      <label htmlFor="age">Age (Years )</label>
      <input id="age" type="Number" />

      <button type="submit">Add User</button>
    </form>
  );
}
