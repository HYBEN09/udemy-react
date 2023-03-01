import { useCallback, useState } from "react";
import Button from "../components/UI/Button/Button";
import DemoOutput from "../components/Demo/Demo";
import "./App.css";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      // 동시에 여러 번의 갱신이 스케줄될 수 있으므로 상태를 갱신할 때는
      // 함수 형태를 이용해서 갱신하는 것을 추천
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
