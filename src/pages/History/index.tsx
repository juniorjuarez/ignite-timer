import React from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";

export const History = () => {
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
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="green">Concluída</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red">Interrompida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 min</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow">Em Andammento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
