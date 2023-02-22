import { Chart } from "../Chart/Chart";

//차트를 반환
export function ExpensesChart(props) {
  //차트를 사용하기 위해 데이터 포인트를 전달
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // props에서 얻는 모든 비용을 반복 실행
  // 그런 다음 모든 비용을 살펴보고 해당 비용의 달을 가져와서
  // 비용 금액에 따라 작절한 dataPoints의 값을 업데이트

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
