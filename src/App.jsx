import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //이 방식의 단점 : 무한 루프를 만들 수도 있다
  //왜냐하면 이것이 저장되어 있는지 확인하고
  // 저장되어 있으면 이걸 true로 설정합니다
  // 그리고 state 설정 함수를 호출할 때마다 이 컴포넌트 함수는 다시 실행됩니다
  // 따라서 이것은 다시 실행되고 1이 나오면 다시 설정하지요, 이런 식으로 계속됩니다.
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  if (storedUserLoggedInInformation === "1") {
    setIsLoggedIn(true);
  }

  const loginHandler = (email, password) => {
    // 앱이 시작될 때마다 데이터가 유지되었는지 확인 ➡️ 자동으로 사용자를 다시 로그인 (로컬 저장소 사용)
    // 사용자가 로그인했다 = "1" || 사용자가 로그인 안했다 = "0"
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
