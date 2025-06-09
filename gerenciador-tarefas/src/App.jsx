import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim()) {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Gerenciador de Tarefas</h1>
      <div className="border rounded p-2 mb-2">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={adicionarTarefa}
          className="text-blue-600 border border-blue-600 px-2 py-1"
        >
          Adicionar
        </button>
      </div>
      <ul className="border rounded">
        {tarefas.map((t, i) => (
          <li key={i} className="border-b px-4 py-2 last:border-b-0">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
