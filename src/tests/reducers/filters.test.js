import filtersReducer from "../../reducers/filters";
import moment from "moment";

const defaultState = {
  text: "",
  sortBy: "date", //date or amount
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

test("should generate set text reducer", () => {
  const text = "test";
  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({
    ...defaultState,
    text,
  });
});

test("should generate text filter reducer with no id", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: undefined,
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, text: action.text });
});

test("should generate sort by amount reducer", () => {
  const action = {
    type: "SORT_BY_AMOUNT",
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, sortBy: "amount" });
});

test("should generate sort by date reducer", () => {
  const action = {
    type: "SORT_BY_DATE",
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, sortBy: "date" });
});

test("should generate set start date reducer", () => {
  const action = {
    type: "SET_START_DATE",
    date: moment(10000).valueOf(),
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, startDate: action.date });
});

test("should generate set end date reducer", () => {
  const action = {
    type: "SET_END_DATE",
    date: moment(20000).valueOf(),
  };

  const state = filtersReducer(defaultState, action);

  expect(state).toEqual({ ...defaultState, endDate: action.date });
});
