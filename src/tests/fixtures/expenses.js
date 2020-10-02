import moment from "moment";

export default [
  {
    id: "1",
    description: "Floor Wax",
    notes: "",
    amount: 1600,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "2",
    description: "Bubble Gum",
    notes: "",
    amount: 100,
    createdAt: moment(0).add(1, "days").valueOf(),
  },
  {
    id: "3",
    description: "UFC",
    notes: "",
    amount: 25000,
    createdAt: moment(0).add(2, "days").valueOf(),
  },
];
