import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const savedTarefas = localStorage.getItem("tarefas");
    return savedTarefas ? JSON.parse(savedTarefas) : [];
  });
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState("todas"); // todas, ativas, concluidas

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;

    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: novaTarefa, concluida: false }
    ]);
    setNovaTarefa("");
  };

  const toggleTarefa = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "ativas") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  const tarefasRestantes = tarefas.filter(t => !t.concluida).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-soft rounded-2xl p-8 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-800 mb-2">Lista de Tarefas</h1>
          <p className="text-gray-600">Organize suas atividades diárias</p>
        </div>

        <form onSubmit={adicionarTarefa} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={novaTarefa}
              onChange={(e) => setNovaTarefa(e.target.value)}
              placeholder="Adicionar nova tarefa..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Adicionar
            </button>
          </div>
        </form>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFiltro("todas")}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              filtro === "todas"
                ? "bg-primary-100 text-primary-700"
                : "hover:bg-gray-100"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFiltro("ativas")}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              filtro === "ativas"
                ? "bg-primary-100 text-primary-700"
                : "hover:bg-gray-100"
            }`}
          >
            Ativas
          </button>
          <button
            onClick={() => setFiltro("concluidas")}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              filtro === "concluidas"
                ? "bg-primary-100 text-primary-700"
                : "hover:bg-gray-100"
            }`}
          >
            Concluídas
          </button>
        </div>

        <ul className="space-y-2">
          {tarefasFiltradas.map((tarefa) => (
            <li
              key={tarefa.id}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 group"
            >
              <button
                onClick={() => toggleTarefa(tarefa.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200
                  ${
                    tarefa.concluida
                      ? "border-primary-500 bg-primary-500"
                      : "border-gray-300 hover:border-primary-500"
                  }`}
              >
                {tarefa.concluida && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              
              <span className={`flex-1 ${tarefa.concluida ? "line-through text-gray-400" : "text-gray-700"}`}>
                {tarefa.texto}
              </span>

              <button
                onClick={() => removerTarefa(tarefa.id)}
                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        {tarefas.length > 0 && (
          <div className="mt-6 text-center text-sm text-gray-600">
            {tarefasRestantes} {tarefasRestantes === 1 ? "tarefa restante" : "tarefas restantes"}
          </div>
        )}

        {tarefas.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhuma tarefa adicionada ainda
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
