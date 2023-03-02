import { useCallback, useMemo, useState } from "react";
import Button from "../components/UI/Button/Button";
import "./App.css";
import DemoList from "../components/Demo/DemoList";
function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  //  불필요하게 새로운 배열을 전달하는 것을 막기 위해서 useMemo를 사용 ➡️ 불필요한 재정렬을 막을 수 있다.
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={listItems} /*items={[5, 3, 1, 10, 9]}*/
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
