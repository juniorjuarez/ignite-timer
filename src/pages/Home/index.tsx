import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HomerContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { createContext, useState } from "react";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

interface ICycle {
  id: string;
  task: string;
  minutsAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface ICyclesContextType {
  activeCycle: ICycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSeccondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as ICyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<ICycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const newCycleFormSchema = zod.object({
    task: zod.string().min(1, "informe a tarefa"),
    minutsAmount: zod
      .number()
      .min(5, "O ciclo precisa ser no mínimo de 5 minutos")
      .max(60, "O ciclo precisa ser no máximo 60 minutos"),
  });

  type TNewCycleFormData = zod.infer<typeof newCycleFormSchema>;
  const newCycleForm = useForm<TNewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: "",
      minutsAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function setSeccondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function handleCreateNewSicly(data: TNewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: ICycle = {
      id,
      task: data.task,
      minutsAmount: data.minutsAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    reset();
    setAmountSecondsPassed(0);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function handleInterruptedCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }
  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomerContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewSicly)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSeccondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountDownButton onClick={handleInterruptedCycle} type="button">
            <HandPalm size={24} /> Imterromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Começar
          </StartCountDownButton>
        )}
      </form>
    </HomerContainer>
  );
}
