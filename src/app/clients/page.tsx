"use client";

import { useEffect, useState } from "react";
import { useStore } from "../../context/useStore";
import { fetchClients } from "../../services/api";
import { useWebSocket } from "../../hooks/useWebSocket";
import { useSearchParams, useRouter } from "next/navigation";
import { FaUser, FaClock } from "react-icons/fa";

const ClientsPage = () => {
  useWebSocket();
  const { clients, setClients } = useStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [maxWaitTime, setMaxWaitTime] = useState<number | null>(
    searchParams.get("maxWaitTime")
      ? Number(searchParams.get("maxWaitTime"))
      : null
  );

  useEffect(() => {
    fetchClients().then(setClients);
  }, [setClients]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (maxWaitTime !== null) params.set("maxWaitTime", String(maxWaitTime));
    else params.delete("maxWaitTime");
    router.replace(`/clients?${params.toString()}`);
  }, [maxWaitTime, router]);

  const filteredClients = clients.filter((client) =>
    maxWaitTime !== null ? client.waitTime <= maxWaitTime : true
  );

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://www.atenciondellamadas.net/wp-content/uploads/2021/02/gestiona-llamadas-de-clientes-de-manera-sencilla.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl w-full mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
        👥 Clientes en Espera
        </h1>

        <input
          type="number"
          placeholder="Máximo tiempo de espera"
          value={maxWaitTime ?? ""}
          onChange={(e) =>
            setMaxWaitTime(e.target.value ? Number(e.target.value) : null)
          }
          className="w-full p-3 rounded-lg bg-white text-black shadow-md border border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
        />

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClients.map((client) => (
            <li
              key={client.id}
              className="p-5 bg-white/20 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <FaUser className="text-gray-300 text-4xl mb-2" />
              <span className="text-lg font-medium text-white">{client.name}</span>
              <div className="flex items-center gap-2 mt-2">
                <FaClock className="text-gray-300 text-lg" />
                <span className="font-semibold text-white">
                  {client.waitTime} min
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientsPage;

