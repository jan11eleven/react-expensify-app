export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//sort by amount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
//sort by date
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
// set start date
export const setStartDate = (date) => ({
  type: "SET_START_DATE",
  date,
});
// set end date
export const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date,
});
