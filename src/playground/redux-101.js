import { createStore } from "redux";

const countState = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.setBy,
      };

    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countState);
//action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ setBy } = {}) => ({
  type: "SET",
  setBy,
});

const resetCount = ({ reset } = {}) => ({
  type: "RESET",
});

store.subscribe(() => {
  console.log(store.getState().count);
});

store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(setCount({ setBy: 50 }));
store.dispatch(resetCount());
