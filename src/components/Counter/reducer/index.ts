interface ICounterState {
  Year2: number;
  Year: number;
  Month2: number;
  Month: number;
  Day2: number;
  Day: number;
}

enum CounterStateName {
  Year2 = "Year2",
  Year = "Year",
  Month2 = "Month2",
  Month = "Month",
  Day2 = "Day2",
  Day = "Day",
}

enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  RESET_ALL = "RESET_ALL",
}

interface IReducerAction {
  type: CounterActionType;
  payload: {
    name: CounterStateName;
    nameAlt: CounterStateName;
  };
}

const initialState: ICounterState = {
  Year: 0,
  Year2: 0,
  Month: 0,
  Month2: 0,
  Day: 0,
  Day2: 0,
};

const reducer = (state: ICounterState, action: IReducerAction) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      if (state[action.payload.name] < 0)
        return { ...state, [action.payload.name]: 0 };
      if (state[action.payload.nameAlt] < 0)
        return { ...state, [action.payload.nameAlt]: 0 };
      if (
        state[action.payload.name] === 9 &&
        state[action.payload.nameAlt] === 9
      )
        return state;
      if (state[action.payload.name] === 9)
        return {
          ...state,
          [action.payload.name]: 0,
          [action.payload.nameAlt]: state[action.payload.nameAlt] + 1,
        };
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] + 1,
      };
    case CounterActionType.DECREMENT:
      if (
        state[action.payload.name] === 0 &&
        state[action.payload.nameAlt] === 0
      )
        return state;
      if (state[action.payload.name] === 0)
        return {
          ...state,
          [action.payload.name]: 9,
          [action.payload.nameAlt]: state[action.payload.nameAlt] - 1,
        };
      return {
        ...state,
        [action.payload.name]: state[action.payload.name] - 1,
      };
    case CounterActionType.RESET:
      return {
        ...state,
        [action.payload.name]: 0,
      };
    case CounterActionType.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};

export { initialState, reducer, CounterActionType, CounterStateName };
