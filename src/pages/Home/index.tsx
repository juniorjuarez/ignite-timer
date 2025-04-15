import { Play } from "phosphor-react";
import {
  FormContainer,
  HomerContainer,
  CountDownContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutsAmoubtInput,
} from "./styles";

export const Home = () => {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="De um nome para o seu projeto"
          />
          <datalist id="task-suggestion">
            <option value="projeto 1"></option>
            <option value="projeto 2"></option>
            <option value="projeto 3"></option>
            <option value="projeto 4"></option>
          </datalist>

          <label htmlFor="minutsAmount">durante</label>
          <MinutsAmoubtInput
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
        </FormContainer>
        <span>minutos.</span>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit">
          <Play size={24} /> Começar
        </StartCountDownButton>
      </form>
    </HomerContainer>
  );
};
