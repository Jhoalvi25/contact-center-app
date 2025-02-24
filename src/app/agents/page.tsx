"use client";

import { Suspense, useEffect, useState } from "react";
import { fetchAgents } from "../../services/api";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingAgents from "./loading";
import AgentsList from "./AgentsList";
import AgentsFilter from "./AgentsFilter";
import Background from "../../components/Background";
import { useWebSocket } from "../../hooks/useWebSocket";
import { Agent } from "../../context/useStore";

//Pagina de Agentes

const AgentPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filter, setFilter] = useState(searchParams.get("status") || "");

  useEffect(() => {
    fetchAgents().then(setAgents);
  }, []);

  // 🔥 WebSockets: Actualiza los agentes en tiempo real
  useWebSocket<Agent>((newAgentData) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === newAgentData.id ? newAgentData : agent
      )
    );
  }, "wss://tu-servidor-websocket-agentes.com");

  useEffect(() => {
    const params = new URLSearchParams();
    if (filter) params.set("status", filter);
    else params.delete("status");
    router.replace(`/agents?${params.toString()}`); //QueryParams
  }, [filter, router]);

  const filteredAgents = filter
    ? agents.filter((agent) => agent.status === filter)
    : agents;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      <Background imageUrl="https://www.semana.com/resizer/v2/TFMXVTAJS5BBZKNUE3RXP2OPCA.jpg?auth=f6d7cd7f35ced2c1933fe0395afdcce0d19d935e3ca60c35fcb6adc15754ef4e&smart=true&quality=75&width=1280&height=720" />

      <div className="relative z-10 max-w-4xl w-full mx-auto p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          👨‍💼 Agentes
        </h1>
        <AgentsFilter filter={filter} setFilter={setFilter} />
        <Suspense fallback={<LoadingAgents />}>
          <AgentsList agents={filteredAgents} />
        </Suspense>
      </div>
    </div>
  );
};

export default AgentPage;
