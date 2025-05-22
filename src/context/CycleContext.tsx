/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { cyclesReducer, type ICycle } from "../reducers/cycles/reducer";
import {
  markCurrentCycleAsFinishedAction,
  addNewCycleAction,
  interruptedCycleAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface ICyclesContextType {
  cycles: ICycle[];
  activeCycle: ICycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSeccondsPassed: (seconds: number) => void;
  createNewCycle: (data: ICreateCycleData) => void;
  interruptedCycle: () => void;
}

interface ICreateCycleData {
  task: string;
  minutsAmount: number;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as ICyclesContextType);

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storadStateASJASON = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storadStateASJASON) {
        return JSON.parse(storadStateASJASON);
      }

      return initialState;
    }
  );
  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function setSeccondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }
  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: ICreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutsAmount: data.minutsAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    // setCycles((state) => [...state, newCycle]);
    setAmountSecondsPassed(0);
  }

  function interruptedCycle() {
    dispatch(interruptedCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSeccondsPassed,
        createNewCycle,
        interruptedCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
