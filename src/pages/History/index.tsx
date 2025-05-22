import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../context/CycleContext";
import { useContext } from "react";
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

export const History = () => {
  const { cycles } = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefas</th>
            <th>Duração</th>
            <th>Inpicio</th>
            <th>Status</th>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutsAmount} minutos.</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em Andammento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
