import type { ICycle } from "./reducer";

export enum ActionType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_ID = "MARK_CURRENT_CYCLE_ID",
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_ID,
  };
}

export function interruptedCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  };
}
