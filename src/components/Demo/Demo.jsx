import React from "react";

function DemoOutput({ show }) {
  console.log("DemoOutput RUNNING");
  return <p>{show ? "This is new!" : ""}</p>;
}

export default React.memo(DemoOutput);
// React.memo : 전체 컴포넌트 트리에 대한 쓸데없는 재렌더링을 막을 수 있다.

// 부모 컴포넌트를 매 번 재평가할 때마다 컴포넌트의 변화가 있거나 props의 값이 변화할 수 있는 경우라면
// React.memo는 크게 의미를 갖지 못합니다. 왜냐하면 컴포넌트의 재렌더링이 필요하기 때문
