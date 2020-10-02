import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup add expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense", () => {
  const action = editExpense("123", { description: "wew", amount: 200 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      description: "wew",
      amount: 200,
    },
  });
});

test("should setup add expense", () => {
  const expenseData = {
    description: "Rent Bill",
    amount: "100",
    createdAt: "2000",
    notes: "test note",
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense without value", () => {
  const expenseData = {
    description: "",
    amount: 0,
    createdAt: 0,
    notes: "",
  };
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
