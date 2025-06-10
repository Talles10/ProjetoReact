import { useParams, Link } from "react-router-dom";
import { projetosPorSemana } from "../data/semana";
import ProjetoCard from "../components/ProjetoCard";

export default function Semana() {
  const { semanaId } = useParams();
  const projetos = projetosPorSemana[decodeURIComponent(semanaId)] || [];

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 underline mb-4 block">
        ← Voltar
      </Link>
      <h2 className="text-2xl font-bold mb-4">{semanaId}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projetos.map((proj) => (
          <ProjetoCard key={proj.nome} {...proj} />
        ))}
      </div>
    </div>
  );
}
