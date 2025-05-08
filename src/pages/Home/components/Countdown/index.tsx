import { useContext, useEffect } from "react";
import { CountDownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";
import { CyclesContext } from "../..";

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSeccondsPassed,
  } = useContext(CyclesContext);

  const totalSeconds = activeCycle ? activeCycle.minutsAmount * 60 : 0;
  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const seccondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (seccondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          setSeccondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setSeccondsPassed(seccondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
}
