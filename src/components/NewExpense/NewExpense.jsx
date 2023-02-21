import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

// 사용자들이 그들의 비용 데이터를 입력할 수 있는 입력창을 렌더링하고 싶습니다
export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //title,amount,date
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
