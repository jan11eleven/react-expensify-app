import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";
import moment from "moment";

test("should generate start date action object", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0),
  });
});

test("should generate end date action object", () => {
  const action = setEndDate(moment(1000));

  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(1000),
  });
});

test("should generate text filter action object", () => {
  const action = setTextFilter("rent");

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
});

test("should generate text filter action object with no value", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});
