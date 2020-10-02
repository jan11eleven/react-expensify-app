import moment from "moment";
import selectExpense from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should generate text filter expense", () => {
  const action = selectExpense(expenses, { text: "UFC" });

  expect(action).toEqual([expenses[2]]);
});

test("should generate sortBy date expense", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };

  const action = selectExpense(expenses, filters);

  expect(action).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should generate sortBy amount expense", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const action = selectExpense(expenses, filters);
});
