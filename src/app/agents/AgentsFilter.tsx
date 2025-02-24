"use client";

//Componenete de filtros para agentes

const AgentsFilter = ({ filter, setFilter }: { filter: string, setFilter: (value: string) => void }) => (
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="w-full p-3 rounded-lg bg-white text-black shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
  >
    <option value="">Todos</option>
    <option value="disponible">Disponible</option>
    <option value="en llamada">En Llamada</option>
    <option value="pausa">En Pausa</option>
  </select>
);

export default AgentsFilter;

