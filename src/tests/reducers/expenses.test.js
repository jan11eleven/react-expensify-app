import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should generate reducer add expense", () => {
  const expense = {
    id: "4",
    description: "Sabong panglaba",
    notes: "",
    amount: 1400,
    createdAt: moment(0).valueOf(),
  };
  const action = {
    type: "ADD_EXPENSE",
    expenses: {
      ...expense,
    },
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test("should generate remove expense reducer", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "3",
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("should generate remove expense reducer with no id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should generate edit expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    udpates: {
      notes: "burat",
    },
  };

  const state = expenseReducer(expenses, action);

  const updated = expenses.map((expense) => {
    if (expense.id === action.id) {
      return {
        ...expense,
        ...action.updates,
      };
    } else {
      return expense;
    }
  });
  expect(state).toEqual(expenses, updated);
});

test("should generate edit expense reducer with no id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    udpates: {
      description: "tite",
    },
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});
