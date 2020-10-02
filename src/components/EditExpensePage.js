import React from "react";
import { connect } from "react-redux";
import { removeExpense, editExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
  return (
    <div>
      <p>editing expense {props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          const updated = props.dispatch(
            editExpense(props.expense.id, expense)
          );
          props.history.push("/");
          console.log("updated");
          console.log(updated);
          console.log(expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
