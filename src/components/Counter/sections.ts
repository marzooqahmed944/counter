import { CounterStateName } from "./reducer";

interface ICounterSection {
  id: string;
  title_10: string;
  title: string;
  value_10: CounterStateName;
  value: CounterStateName;
  reducerName: CounterStateName;
  reducerNameAlt: CounterStateName;
}

export const sections: Array<ICounterSection> = [
  {
    id: "year",
    title_10: "Y",
    title: "Y",
    value_10: CounterStateName.Year2,
    value: CounterStateName.Year,
    reducerName: CounterStateName.Year,
    reducerNameAlt: CounterStateName.Year2,
  },
  {
    id: "month",
    title_10: "M",
    title: "M",
    value_10: CounterStateName.Month2,
    value: CounterStateName.Month,
    reducerName: CounterStateName.Month,
    reducerNameAlt: CounterStateName.Month2,
  },
  {
    id: "day",
    title_10: "D",
    title: "D",
    value_10: CounterStateName.Day2,
    value: CounterStateName.Day,
    reducerName: CounterStateName.Day,
    reducerNameAlt: CounterStateName.Day2,
  },
];
