"use client";

import { Suspense, useEffect, useState } from "react";
import { fetchClients } from "../../services/api";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingClients from "./loading";
import ClientsList from "./ClienstList";
import ClientsFilter from "./ClientsFilter";
import Background from "../../components/Background";
import { useWebSocket } from "@/hooks/useWebSocket";

//Pagina de clientes

const ClientsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [clients, setClients] = useState<any[]>([]);
  const [maxWaitTime, setMaxWaitTime] = useState<number | null>(
    searchParams.get("maxWaitTime") ? Number(searchParams.get("maxWaitTime")) : null
  );

  useEffect(() => {
    fetchClients().then(setClients);
  }, []);

    // 🔥 WebSockets: Actualiza clientes en tiempo real
    useWebSocket((newClientData) => {
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === newClientData.id ? newClientData : client
        )
      );
    });

  useEffect(() => {
    const params = new URLSearchParams();
    if (maxWaitTime !== null) params.set("maxWaitTime", String(maxWaitTime));
    else params.delete("maxWaitTime");
    router.replace(`/clients?${params.toString()}`);
  }, [maxWaitTime, router]);

  const filteredClients = maxWaitTime !== null
    ? clients.filter((client) => client.waitTime <= maxWaitTime)
    : clients;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      <Background imageUrl="https://www.atenciondellamadas.net/wp-content/uploads/2021/02/gestiona-llamadas-de-clientes-de-manera-sencilla.jpg" />

      <div className="relative z-10 max-w-4xl w-full mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">👥 Clientes en Espera</h1>
        <ClientsFilter maxWaitTime={maxWaitTime} setMaxWaitTime={setMaxWaitTime} />
        <Suspense fallback={<LoadingClients />}>
          <ClientsList clients={filteredClients} />
        </Suspense>
      </div>
    </div>
  );
};

export default ClientsPage;



