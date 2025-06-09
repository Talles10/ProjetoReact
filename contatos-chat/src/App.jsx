import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const contatos = [
  {
    id: 1,
    nome: "Maria",
    mensagens: ["Oi, tudo bem?", "Vamos sair amanhã?"],
  },
  {
    id: 2,
    nome: "João",
    mensagens: ["Você recebeu o e-mail?", "Me avisa se precisar de ajuda."],
  },
  {
    id: 3,
    nome: "Ana",
    mensagens: ["Bom dia!", "Já viu aquele filme novo?"],
  },
];

export default function App() {
  const [contatoSelecionado, setContatoSelecionado] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-4xl h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="w-1/3 border-r p-4 space-y-2 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Contatos</h2>
          {contatos.map((contato) => (
            <button
              key={contato.id}
              className={`block w-full text-left p-2 rounded-lg hover:bg-gray-200 ${
                contatoSelecionado?.id === contato.id ? "bg-gray-300" : ""
              }`}
              onClick={() => setContatoSelecionado(contato)}
            >
              {contato.nome}
            </button>
          ))}
        </div>
        <div className="w-2/3 p-4">
          {contatoSelecionado ? (
            <>
              <h2 className="text-xl font-bold mb-4">
                Chat com {contatoSelecionado.nome}
              </h2>
              <div className="space-y-2">
                {contatoSelecionado.mensagens.map((mensagem, i) => (
                  <div
                    key={i}
                    className="bg-blue-100 rounded-xl p-3 w-fit max-w-[75%]"
                  >
                    {mensagem}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Selecione um contato para ver o chat.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
