import { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 모든 컴포넌트 재평가 후에 실행된다
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

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
    <AuthContext.Provider
      // value 객체는  IsLoggedIn이 변경될 때마다 리액트에 의해 업데이트
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
