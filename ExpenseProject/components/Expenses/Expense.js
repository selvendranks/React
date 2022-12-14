import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [enteredYear, setYear] = useState("2022");

  function filterYear(Year) {
    setYear(Year);
  }

  const filtered = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          getYear={filterYear}
          selected={enteredYear}
        ></ExpensesFilter>
        <ExpensesChart expenses ={filtered}></ExpensesChart>
        <ExpenseList items={filtered}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expense;
