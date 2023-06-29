"use client";

import { useReducer } from "react";
import {
  CounterActionType,
  initialState,
  reducer
} from "./reducer";
import { sections } from "./sections";

const Counter = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    () => initialState
  );
  return (
    <div className="sm:flex">
      {sections.map((section) => (
        <div
          key={section.id}
          className="mr-4 flex w-48 flex-col items-center justify-center"
        >
          <div className="flex justify-between">
            <div>{section.title_10}</div>
            <div>{section.title}</div>
          </div>
          <div className="flex">
            <div className="mr-1 w-16">{state[section.value_10] || 0}</div>
            <div className="w-16">{state[section.value] || 0}</div>
          </div>
          <div className="flex">
            <div
              className="spacing border-black bg-black text-white mr-2 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full border bg-gradient-to-r from-gold to-gold-light p-2 text-center text-[1.5rem] shadow-xl"
              onClick={() =>
                dispatch({
                  type: CounterActionType.INCREMENT,
                  payload: {
                    name: section.reducerName,
                    nameAlt: section.reducerNameAlt,
                  },
                })
              }
            >
              +
            </div>
            <div
              className="border-black bg-black text-white flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full border bg-gradient-to-r from-gold to-gold-light p-2 text-center text-[1.5rem] shadow-xl"
              onClick={() =>
                dispatch({
                  type: CounterActionType.DECREMENT,
                  payload: {
                    name: section.reducerName,
                    nameAlt: section.reducerNameAlt,
                  },
                })
              }
            >
              -
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
