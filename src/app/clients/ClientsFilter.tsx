"use client";
//Filtro de cliente
const ClientsFilter = ({ maxWaitTime, setMaxWaitTime }: { maxWaitTime: number | null, setMaxWaitTime: (value: number | null) => void }) => (
  <input
    type="number"
    placeholder="Máximo tiempo de espera"
    value={maxWaitTime ?? ""}
    onChange={(e) =>
      setMaxWaitTime(e.target.value ? Number(e.target.value) : null)
    }
    className="w-full p-3 rounded-lg bg-white text-black shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
  />
);

export default ClientsFilter;



