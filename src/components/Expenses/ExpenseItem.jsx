import Card from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export function ExpenseItem(props) {
  const { title } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button type="button">Change Title</button>
    </Card>
  );
}
