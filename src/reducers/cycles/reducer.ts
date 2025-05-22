import { produce } from "immer";

import { ActionType } from "./actions";

export interface ICyclesState {
  cycles: ICycle[];
  activeCycleId: string | null;
}
export interface ICycle {
  id: string;
  task: string;
  minutsAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function cyclesReducer(state: ICyclesState, action: any) {
  switch (action.type) {
    case ActionType.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionType.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }
    case ActionType.MARK_CURRENT_CYCLE_ID: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });
      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }

    default:
      return state;
  }
}
export { ActionType };
