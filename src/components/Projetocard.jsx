export default function ProjetoCard({ nome, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-xl shadow-md bg-white hover:bg-blue-50 border border-gray-200 transition"
    >
      <h2 className="text-lg font-semibold text-blue-600">{nome}</h2>
      <p className="text-sm text-gray-500">{url}</p>
    </a>
  );
}
