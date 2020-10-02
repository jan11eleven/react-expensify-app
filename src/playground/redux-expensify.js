import { createStore, combineReducers } from "redux";

// action generator
//filter
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: 1000 })
);

const expense2 = store.dispatch(
  addExpense({ description: "milo", amount: 50, createdAt: 5000 })
);

// store.dispatch(removeExpense(expense1.expenses.id));

// store.dispatch(editExpense(expense2.expenses.id, { amount: 500 }));

// store.dispatch(setTextFilter("mi"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(5100));

const demoState = {
  expense: [
    {
      id: 1,
      description: "Sample",
      note: "Sample note",
      amount: 150,
      createdAt: 0,
    },
  ],

  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
