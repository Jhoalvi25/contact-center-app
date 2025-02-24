"use client";

import { useEffect, useState } from "react";
import { useStore } from "../../context/useStore";
import { fetchAgents } from "../../services/api";
import { useWebSocket } from "../../hooks/useWebSocket";
import { useSearchParams, useRouter } from "next/navigation";
import { FaUserTie, FaPhone, FaUserClock } from "react-icons/fa";

const statusColors: Record<string, string> = {
  disponible: "bg-green-500 text-white",
  "en llamada": "bg-blue-500 text-white",
  pausa: "bg-yellow-500 text-white",
};

const AgentPage = () => {
  useWebSocket();
  const { agents, setAgents } = useStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filter, setFilter] = useState(searchParams.get("status") || "");

  useEffect(() => {
    fetchAgents().then(setAgents);
  }, [setAgents]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filter) params.set("status", filter);
    else params.delete("status");
    router.replace(`/agents?${params.toString()}`);
  }, [filter, router]);

  const filteredAgents = agents.filter((agent) =>
    filter ? agent.status === filter : true
  );

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://www.semana.com/resizer/v2/TFMXVTAJS5BBZKNUE3RXP2OPCA.jpg?auth=f6d7cd7f35ced2c1933fe0395afdcce0d19d935e3ca60c35fcb6adc15754ef4e&smart=true&quality=75&width=1280&height=720')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl w-full mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          👨‍💼 Agentes
        </h1>

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

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAgents.map((agent) => (
            <li
              key={agent.id}
              className="p-5 bg-white/20 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <FaUserTie className="text-gray-300 text-4xl mb-2" />
              <span className="text-lg font-medium text-white">{agent.name}</span>
              <span
                className={`text-sm px-3 py-1 rounded-full mt-2 ${
                  statusColors[agent.status]
                }`}
              >
                {agent.status}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <FaUserClock className="text-gray-300 text-lg" />
                <span className="font-semibold text-white">
                  {agent.waitTime} min
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgentPage;

