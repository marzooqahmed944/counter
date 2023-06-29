"use client";

import { useReducer } from "react";
import { CounterActionType, initialState, reducer } from "./reducer";
import { sections } from "./sections";
import { Dancing_Script, Courgette } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });
const courgette = Courgette({ subsets: ["latin"], weight: "400" });

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
          className="mr-4 mt-4 flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className={`h-12 text-[32px] ${courgette.className}`}>
              {section.title_10}
            </div>
            <div
              className={`${dancing_script.className} flex h-28 w-12 items-center justify-center rounded-lg border text-[64px] `}
            >
              {state[section.value_10] || 0}
            </div>
            <div
              className={`border-black bg-black text-white mr-2 mt-2 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full border bg-gradient-to-r from-gold to-gold-light p-2 text-center text-[1.5rem] shadow-xl ${courgette.className}`}
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
          </div>
          <div className="flex flex-col items-center">
            <div className={`h-12 text-[32px] ${courgette.className}`}>
              {section.title}
            </div>
            <div
              className={`${dancing_script.className} flex h-28 w-12 items-center justify-center rounded-lg border text-[64px] `}
            >
              {state[section.value] || 0}
            </div>
            <div
              className={`border-black bg-black text-white mt-2 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full border bg-gradient-to-r from-gold to-gold-light p-2 text-center text-[1.5rem] shadow-xl ${courgette.className}`}
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
