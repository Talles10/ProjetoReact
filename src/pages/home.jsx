import { projetosPorSemana } from "../data/projetos";
import SemanaCard from "../components/SemanaCard";

export default function Home() {
  const semanas = Object.keys(projetosPorSemana);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard de Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {semanas.map((semana) => (
          <SemanaCard key={semana} semana={semana} />
        ))}
      </div>
    </div>
  );
}
