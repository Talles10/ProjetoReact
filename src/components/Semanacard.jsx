import { Link } from "react-router-dom";

export default function SemanaCard({ semana }) {
  return (
    <Link
      to={`/semana/${encodeURIComponent(semana)}`}
      className="block p-4 bg-blue-500 text-white rounded-xl text-center hover:bg-blue-600 transition"
    >
      {semana}
    </Link>
  );
}
