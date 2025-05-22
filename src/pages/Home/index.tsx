import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HomerContainer,
  StartCountDownButton,
  StopCountDownButton,
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../context/CycleContext";
import { useContext } from "react";

export function Home() {
  const { activeCycle, createNewCycle, interruptedCycle } =
    useContext(CyclesContext);

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

  function handleCreateNewyCycle(data: TNewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomerContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewyCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptedCycle} type="button">
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
