import { FormContainer, TaskInput, MinutsAmountInput } from "./styles";

import { useContext } from "react";

import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CycleContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="De um nome para o seu projeto"
        {...register("task")}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestion">
        <option value="projeto 1"></option>
        <option value="projeto 2"></option>
        <option value="projeto 3"></option>
        <option value="projeto 4"></option>
      </datalist>

      <label htmlFor="minutsAmount">durante</label>
      <MinutsAmountInput
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutsAmount", { valueAsNumber: true })}
      />
    </FormContainer>
  );
}
