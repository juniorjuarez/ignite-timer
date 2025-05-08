import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any);

function Countodown() {
  const { activeCycle } = useContext(CyclesContext);
  return <h1>Countdown: {activeCycle}</h1>;
}

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);
  return (
    <div>
      <h1>NewCycleForm {activeCycle}</h1>;
      <button
        onClick={() => {
          setActiveCycle(activeCycle + 1);
        }}
      >
        Altera Ciclo
      </button>
    </div>
  );
}

export const Home = () => {
  const [activeCycle, setActiveCycle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <Countodown />
        <NewCycleForm />
      </div>
    </CyclesContext.Provider>
  );
};
