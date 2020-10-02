import { v4 as uuidv4 } from "uuid";

export const addExpense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuidv4(),
    description,
    notes,
    amount,
    createdAt,
  },
});

export const removeExpense = ({ id = {} }) => ({
  type: "REMOVE_EXPENSE",
  id,
});
//edit expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
