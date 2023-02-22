import "./ChartBar.css";

export function ChartBar(props) {
  // ChartBar인스턴스가 얼마나 채워져야 하는지 계산 해줘야 함
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* 차트의 바가 얼마나 많이 채워져야 하는지 기억하는 역할 */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
